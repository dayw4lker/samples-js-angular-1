var path = require("path");

/**
 * GET /favicon.ico
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: * / *
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cookie: DT=DI0jLnSH-63R9Gd7XKjjwHZ3Q; t=default; JSESSIONID=2A326E2FD56CA3F024F7D81D1674DE6C
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("etag", "W/\"5430-1446738142000\"");
  res.setHeader("last-modified", "Thu, 05 Nov 2015 15:42:22 GMT");
  res.setHeader("content-type", "image/x-icon");
  res.setHeader("content-length", "5430");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
