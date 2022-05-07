const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Property = require("./models/property.js");
mongoose.connect("mongodb://localhost:27017/propertyApp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makeproperty", async (req, res) => {
  const property = new Property({
    price: 20000,
    location: "Montreal Quebec",
    id: 101110,
    revenue: 65000,
  });
  await property.save();
  res.send(property);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
