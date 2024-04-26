export const viewerRequestPassthrough = {
  "Records": [
    {
      "cf": {
        "config": {
          "distributionId": "EXAMPLE"
        },
        "request": {
          "clientIp": "216.58.212.206",
          "headers": {
            "host": [
              {
                "key": "Host",
                "value": "example.com"
              }
            ],
            "cloudfront-is-mobile-viewer": [
              {
                "key": "CloudFront-Is-Mobile-Viewer",
                "value": "false"
              }
            ],
            "cloudfront-is-tablet-viewer": [
              {
                "key": "CloudFront-Is-Tablet-Viewer",
                "value": "false"
              }
            ],
            "cloudfront-is-smarttv-viewer": [
              {
                "key": "CloudFront-Is-SmartTV-Viewer",
                "value": "false"
              }
            ],
            "cloudfront-is-desktop-viewer": [
              {
                "key": "CloudFront-Is-Desktop-Viewer",
                "value": "true"
              }
            ],
            "cloudfront-is-ios-viewer": [
              {
                "key": "CloudFront-Is-IOS-Viewer",
                "value": "false"
              }
            ],
            "cloudfront-is-android-viewer": [
              {
                "key": "CloudFront-Is-Android-Viewer",
                "value": "false"
              }
            ],
            "accept": [
              {
                "key": "Accept",
                "value": "*/*"
              }
            ],
            "cloudfront-forwarded-proto": [
              {
                "key": "CloudFront-Forwarded-Proto",
                "value": "https"
              }
            ],
            "x-forwarded-for": [
              {
                "key": "X-Forwarded-For",
                "value": "216.58.212.206"
              }
            ],
            "user-agent": [
              {
                "key": "User-Agent",
                "value": "Insomnia/2023.5.7"
              }
            ],
            "via": [
              {
                "key": "Via",
                "value": "2.0 bea62851e0f3994500f933bd51837f52.cloudfront.net (CloudFront)"
              }
            ],
            "cloudfront-viewer-http-version": [
              {
                "key": "CloudFront-Viewer-HTTP-Version",
                "value": "2.0"
              }
            ],
            "cloudfront-viewer-country": [
              {
                "key": "CloudFront-Viewer-Country",
                "value": "GB"
              }
            ],
            "cloudfront-viewer-country-name": [
              {
                "key": "CloudFront-Viewer-Country-Name",
                "value": "United Kingdom"
              }
            ],
            "cloudfront-viewer-country-region": [
              {
                "key": "CloudFront-Viewer-Country-Region",
                "value": "ENG"
              }
            ],
            "cloudfront-viewer-country-region-name": [
              {
                "key": "CloudFront-Viewer-Country-Region-Name",
                "value": "England"
              }
            ],
            "cloudfront-viewer-city": [
              {
                "key": "CloudFront-Viewer-City",
                "value": "Elstree"
              }
            ],
            "cloudfront-viewer-postal-code": [
              {
                "key": "CloudFront-Viewer-Postal-Code",
                "value": "WD6"
              }
            ],
            "cloudfront-viewer-time-zone": [
              {
                "key": "CloudFront-Viewer-Time-Zone",
                "value": "Europe/London"
              }
            ],
            "cloudfront-viewer-latitude": [
              {
                "key": "CloudFront-Viewer-Latitude",
                "value": "51.65240"
              }
            ],
            "cloudfront-viewer-longitude": [
              {
                "key": "CloudFront-Viewer-Longitude",
                "value": "-0.27520"
              }
            ],
            "cloudfront-viewer-address": [
              {
                "key": "CloudFront-Viewer-Address",
                "value": "216.58.212.206:56987"
              }
            ],
            "cloudfront-viewer-tls": [
              {
                "key": "CloudFront-Viewer-TLS",
                "value": "TLSv1.3:TLS_AES_128_GCM_SHA256:fullHandshake"
              }
            ],
            "cloudfront-viewer-asn": [
              {
                "key": "CloudFront-Viewer-ASN",
                "value": "13037"
              }
            ]
          },
          "method": "GET",
          "origin": {
            "custom": {
              "customHeaders": {
                "authorization": [
                  {
                    "key": "Authorization",
                    "value": "Basic wibble"
                  }
                ]
              },
              "domainName": "origin.example.com",
              "keepaliveTimeout": 5,
              "path": "",
              "port": 443,
              "protocol": "https",
              "readTimeout": 60,
              "sslProtocols": [
                "TLSv1.2"
              ]
            }
          },
          "uri": "/ok"
        }
      }
    }
  ]
}