export const handler = async (event) => {
    const cf = event.Records[0].cf;
    
    console.log(JSON.stringify(cf));
    
    switch (cf.config.eventType) {
      case "viewer-request":
      case "origin-request":  
        return cf.request;
      case "origin-response":
      case "viewer-response":  
        return cf.response;
    }
  };