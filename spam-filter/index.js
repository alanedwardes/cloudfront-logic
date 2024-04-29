function handler(event) {
    // Prefix filters to apply to the path - for example https://example.com/admin*
    var prefixes = ["/cms", "/portal", "/admin", "/backoffice", "/downloader", "/vendor", "/contrib", "/orchard", "/cubemail", "/confluence"];
    
    // Less-specific matches anywhere in the path - for example */phpmyadmin/*
    var matches = ["/.env", "/cgi-bin/", "/phpmyadmin/", "/sqlmanager/", "/.git/", "/.well-known/", "/wordpress/", "/wp-", "/wp/", "/wp1/", "/wp2/", "/rwservlet/", "/zb_users/", "/rdweb/", "/fckeditor/", "/nmaplowercheck", "/.vscode/", "/.vs/", "/alfa_data/"];
    
    // Suffix matches to apply to the path - for example *.php
    var suffixes = [".php", ".php7", ".cgi", ".pl", ".cfm", ".jhtml", ".shtml", ".jsa", ".jsp", ".asp", ".aspx", ".ashx", ".ds_store", "sftp.json", "sftp-config.json"];

    var uri = event.request.uri.toLowerCase();
    if (prefixes.some(prefix => uri.startsWith(prefix)) ||
        matches.some(match => uri.match(match)) ||
        suffixes.some(suffix => uri.endsWith(suffix))) {
        return { statusCode: 402, statusDescription: 'Payment Required' };
    }
    
    return event.request;
}