const mongoose = require("mongoose");
const Schema = mongoose.Schema; // shortcut

const PropertySchema = new Schema({
  price: Number,
  location: String,
  id: Number,
  revenue: Number,
  expense: Number,
  active: Boolean,
});

module.exports = mongoose.model("Property", PropertySchema);
