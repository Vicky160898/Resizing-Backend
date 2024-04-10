const TextModel = require("../model/index");
const CountModel = require("../model/countSchema");

const addText = async (req, res) => {
  try {
    const { text } = req.body;

    // Check if there is already a text present in the database
    const existingText = await TextModel.findOne();
    if (existingText) {
      // If text exists, delete it
      await TextModel.findByIdAndDelete(existingText._id);
    }

    // Create a new text document with the provided text
    const newText = new TextModel({ text });
    await newText.save();

    return res
      .status(200)
      .json({ msg: "Text added successfully.", data: newText });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in adding text.", error: error.message });
  }
};

const updateText = async (req, res) => {
  try {
    const { text } = req.body;

    // Check if there is already a text present in the database
    const existingText = await TextModel.findOne();
    if (existingText) {
      // If text exists, delete it
      await TextModel.findByIdAndDelete(existingText._id);
    }

    // Create a new text document with the provided text
    const newText = new TextModel({ text });
    await newText.save();

    return res
      .status(200)
      .json({ msg: "Text added successfully.", data: newText });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in adding text.", error: error.message });
  }
};

const getText = async (req, res) => {
  try {
    const textData = await TextModel.findOne();
    return res
      .status(200)
      .json({ msg: "Data fetched successfully.", data: textData });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in fetching text data.", error: error.message });
  }
};

const getCount = async (req, res) => {
  try {
    const countData = await CountModel.findOne({ endpoint: "/add/text" });
    return res
      .status(200)
      .json({ msg: "Data fetched successfully.", data: countData });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in fetching text data.", error: error.message });
  }
};

const getCount1 = async (req, res) => {
  try {
    const countData = await CountModel.findOne({ endpoint: "/update/text" });
    return res
      .status(200)
      .json({ msg: "Data fetched successfully.", data: countData });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in fetching text data.", error: error.message });
  }
};

module.exports = { addText, updateText, getText, getCount, getCount1 };
