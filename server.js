const express = require("express");

const server = express();

server.use(express.static(__dirname));

server.get("/", (req, res) => {
  res.sendFile("index.html");
});

server.listen(3001, () => {
  console.log(`local server is running on 3001 port`);
});
