const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dosyalar"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dosyalar/index.html");
});

app.get("/hakkimizda", function (req, res) {
  res.sendFile(__dirname + "/dosyalar/hakkimizda.html");
});

app.listen(5000);
