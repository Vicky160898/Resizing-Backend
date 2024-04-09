const { Schema, model } = require("mongoose");

const CountSchema = new Schema({
  endpoint: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const CountModel = model("Count", CountSchema);
module.exports = CountModel;
