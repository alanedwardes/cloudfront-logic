# cloudfront-follow-origin-redirects
An **Origin Request** Lambda@Edge function definition which does the following:
* Attempts to make a HEAD request to the origin using the same parameters as CloudFront itself (with 3 retries)
* If the response status code is a redirect, rewrite the request to the redirect location
* If the response status code is not a redirect, do nothing

This logic allows redirects to be followed from within CloudFront, allowing the edge cache to be leveraged for the redirected to content.

This is useful for things like S3 signed URLs, where a server might redirect the client to S3. If CloudFront itself follows the redirect, it can cache the content in its edge caches.
