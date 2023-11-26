const http = require("http");
const express = require("express");
const app = express();
const router = require("./index.js");

app.use(express.json());
app.use("/", router);

const server = http.createServer(app);

const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`Server running on ${port}/`);
});
