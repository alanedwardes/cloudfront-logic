const MAX_RETRIES = 3;

export const handler = async (event, context, callback) => {
    const request = event.Records[0].cf.request;
    console.log(JSON.stringify(request));
    
    const origin = request.origin.custom;
    
    const fetchOptions = {
        headers: {},
        method: 'HEAD',
        redirect: 'manual'
    };
    
    for (const [key, value] of Object.entries(request.headers)) {
        const header = value[0];
        fetchOptions.headers[header.key] = header.value;
    }
    
    for (const [key, value] of Object.entries(origin.customHeaders)) {
        const header = value[0];
        fetchOptions.headers[header.key] = header.value;
    }
    
    const fetchResource = origin.protocol + '://' + origin.domainName + origin.path + request.uri + (request.querystring ? '?' + request.querystring : '');
    
    let fetchResponse;
    for (let retry = 0; retry < MAX_RETRIES; retry++) {
        console.log("Starting fetch", fetchResource, "retry", retry);
        
        try {
            fetchResponse = await fetch(fetchResource, fetchOptions);
            if (fetchResponse.status >= 500) {
                throw new Error("Internal server error");
            }
            
            console.log("Ending fetch, got", fetchResponse.status);
            break;
        } catch (error) {
            console.error("Fetch error", error, "retry", retry);
        }
    }
    
    if (fetchResponse.status !== 302) {
        console.error("Expected 302, got", fetchResponse.status);
        return request;
    }
    
    const newLocation = new URL(fetchResponse.headers.get('location'));

    const readOnlyHeaders = ['accept-encoding', 'content-length', 'if-modified-since', 'if-none-match', 'if-range', 'if-unmodified-since', 'transfer-encoding', 'via'];
    request.headers = Object.fromEntries(Object.entries(request.headers).filter(([key]) => readOnlyHeaders.includes(key)));
    request.headers.host = [{ key: 'Host', value: newLocation.host }];
    request.origin.custom.domainName = newLocation.host;
    request.origin.custom.customHeaders = {};
    request.uri = newLocation.pathname;
    request.querystring = newLocation.search.replace('?', '');
    console.log(JSON.stringify(request));
    return request;
};
