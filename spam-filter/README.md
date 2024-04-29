# cloudfront-function-spam-filter
Can be used as a **Viewer Request** CloudFront Function definition to return an HTTP 402 error to callers which are scanning for vulnerabilities.

The intent is not to make a website more secure, rather make these scans easy to filter out of log analysis using the [lesser-used 402 error code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402).