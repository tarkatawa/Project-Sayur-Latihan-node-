const fs = require("fs");
const http = require("http");
const url = require("url");

const lamanUtama = fs.readFileSync(`${__dirname}/templates/index.html`);

var mime = {
  html: "text/html",
  txt: "text/plain",
  css: "text/css",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  js: "application/javascript",
};

const server = http.createServer((req, res) => {
  //   res.end("Hello from the server!");

  const { query, pathname } = url.parse(req.url, true); //??

  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const output = lamanUtama;
    res.end(output);
    console.log(`${__dirname}`);
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
