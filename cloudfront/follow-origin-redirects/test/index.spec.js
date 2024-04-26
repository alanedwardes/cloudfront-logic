import { handler } from "../src/index.mjs";
import { viewerRequestWithQueryParams } from "./viewerRequestWithQueryParams.mjs";
import { viewerRequestWithCookies } from "./viewerRequestWithCookies.mjs";
import { viewerRequestPassthrough } from "./viewerRequestPassthrough.mjs";
import { server } from "../mocks/node";
import assert from 'assert';

server.listen();

describe("handler", function () {
  
  it("follows redirect with query parameters", async () => {
    const result = await handler(viewerRequestWithQueryParams);
    assert.deepEqual(result, {
      clientIp: "216.58.212.206",
      headers: {
        via: [
          {
            key: "Via",
            value:
              "2.0 bea62851e0f3994500f933bd51837f52.cloudfront.net (CloudFront)",
          },
        ],
        host: [{ key: "Host", value: "files.example.com" }],
      },
      method: "GET",
      origin: {
        custom: {
          customHeaders: {},
          domainName: "files.example.com",
          keepaliveTimeout: 5,
          path: "",
          port: 443,
          protocol: "https",
          readTimeout: 60,
          sslProtocols: ["TLSv1.2"],
        },
      },
      querystring: "credentials=query",
      uri: "/file.JPG",
    });
  });

  it("follows redirect with cookies", async () => {
    const result = await handler(viewerRequestWithCookies);
    assert.deepEqual(result, {
      clientIp: "216.58.212.206",
      headers: {
        via: [
          {
            key: "Via",
            value:
              "2.0 bea62851e0f3994500f933bd51837f52.cloudfront.net (CloudFront)",
          },
        ],
        host: [{ key: "Host", value: "files.example.com" }],
      },
      method: "GET",
      origin: {
        custom: {
          customHeaders: {},
          domainName: "files.example.com",
          keepaliveTimeout: 5,
          path: "",
          port: 443,
          protocol: "https",
          readTimeout: 60,
          sslProtocols: ["TLSv1.2"],
        },
      },
      querystring: "credentials=cookie",
      uri: "/file.JPG",
    });
  });

  it("passes through non-redirect responses", async () => {
    const result = await handler(viewerRequestPassthrough);
    assert.deepEqual(result, viewerRequestPassthrough.Records[0].cf.request);
  });

});
