const express = require("express");
const app = express();
app.use(express.static("views"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Trello Lite" });
});

// app.post("/", (req, res) => {});

app.listen(3000);
