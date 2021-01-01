const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let carschema = new Schema({
  make: { type: String, required: true, maxlength: 50 },
  car_model: { type: String, required: true, maxlength: 50 },
});
