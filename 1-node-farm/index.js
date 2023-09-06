const fs = require("fs");
const http = require("http");

//////////////////////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");

// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync("./starter/txt/output.txt", textOut);
// console.log("File written");

// Non-blocking, asynchronous way
// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./starter/txt/final.txt",
//         `${data2}\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file is written");
//         }
//       );
//     });
//   });
// });

//////////////////////////////////////////////////////////////////
// SERVER

const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview.");
  } else if (pathName === "/product") {
    res.end("This is the product.");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found.</h1>");
  }

  console.log(req);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
