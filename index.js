/**Step 1: use scrape to copy the website */
const scrape = require("website-scraper");
let options = {
  urls: ["website to clone"],
  directory: "./path-to-clone"
};

scrape(options)
  .then(result => {
    console.log("Website succesfully downloaded");
  })
  .catch(err => {
    console.log("An error ocurred", err);
  });

/**Step 2: disable scrape and start server to see the webiste */
let http = require("http");
let fs = require("fs");
let index = fs.readFileSync("./path-to-clone/index.html");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  })
  .listen(7000);
