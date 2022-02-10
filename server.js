const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const boardData = {};
app.get("/", (req, res) => {
  res.render("index", boardData);
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.render("index", boardData);
});

app.listen(3000);
