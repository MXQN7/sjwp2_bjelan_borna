const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/submit", function (req, res) {
  console.log(req.body);

  const street = req.body.streetName;
  const pet = req.body.petName;
  const bandName = street + " " + pet;

  res.send(`<h1>Your band name is: ${bandName}</h1>`);
});

app.listen(3000, function () {
  console.log("http://localhost:3000");
});