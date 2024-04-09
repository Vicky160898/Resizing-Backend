const { Schema, model } = require("mongoose");

const TextSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const TextModel = model("Text", TextSchema);
module.exports = TextModel;
