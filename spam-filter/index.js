function handler(event) {
    // Prefix filters to apply to the path - for example https://example.com/admin*
    var prefixes = ["/cms", "/backoffice", "/downloader", "/vendor", "/contrib", "/orchard", "/cubemail", "/confluence"];
    
    // Less-specific matches anywhere in the path - for example */phpmyadmin/*
    var matches = ["/.env", "/cgi-bin/", "/phpmyadmin/", "/sqlmanager/", "/.git/", "/.well-known/", "/wordpress/", "/wp-", "/wp/", "/wp1/", "/wp2/", "/zb_users/", "/rdweb/", "/fckeditor/", "/nmaplowercheck", "/.vscode/", "/.vs/", "/alfa_data/", "/phpinfo", "/.aws"];
    
    // Suffix matches to apply to the path - for example *.php
    var suffixes = [".php", ".php3", ".php4", ".php5", ".php6", ".php7", ".cgi", ".pl", ".cfm", ".jhtml", ".shtml", ".jsa", ".hsp", ".jsp", ".asp", ".aspx", ".ashx", ".do", ".action", ".ds_store", ".alfa", "sftp.json", "sftp-config.json", "/rwservlet", ".pem"];

    // Partial user agent matches
    var userAgents = ["censysinspect", "go-http-client", "palo alto networks", "HyperMegaBotGettingOnlyHTMLsFromYourWebsite"];

    var uri = event.request.uri.toLowerCase();
    var agent = (((event.request.headers['user-agent'] ?? {})['value']) ?? '').toLowerCase();
    
    if (prefixes.some(prefix => uri.startsWith(prefix)) ||
        matches.some(match => uri.match(match)) ||
        suffixes.some(suffix => uri.endsWith(suffix)) ||
        userAgents.some(match => agent.match(match))) {
        return { statusCode: 402, statusDescription: 'Payment Required' };
    }
    
    return event.request;
}
