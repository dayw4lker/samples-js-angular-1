var path = require("path");

/**
 * GET /oauth2/v1/authorize/redirect;jsessionid=2A326E2FD56CA3F024F7D81D1674DE6C?okta_key=SQRUEu8vBuDZwnuxLkDn9X_VeY87y2BL2XlM6jkRmdc
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cookie: t=default; DT=DI0jLnSH-63R9Gd7XKjjwHZ3Q; JSESSIONID=2A326E2FD56CA3F024F7D81D1674DE6C
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqC2Bpbfp3S0GTxrzwwAolig");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9998");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/"]);
  res.setHeader("location", "http://rain.okta1.com:1802/login/login.htm?fromURI=%2Foauth2%2Fv1%2Fauthorize%2Fredirect%3Bjsessionid%3D2A326E2FD56CA3F024F7D81D1674DE6C%3Fokta_key%3DSQRUEu8vBuDZwnuxLkDn9X_VeY87y2BL2XlM6jkRmdc");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
