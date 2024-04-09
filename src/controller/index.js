const TextModel = require("../model/index");

const addText = async (req, res) => {
  try {
    const { text } = req.body;
    const newText = new TextModel({
      text,
    });
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
    const existingText = await TextModel.findOneAndUpdate(
      { text: text }, // Find the document with the given text
      { text: text }, // Update the text with the same value
      { new: true, upsert: true } // Return the updated document, and create if not found
    );
    return res
      .status(200)
      .json({ msg: "Text updated successfully.", data: existingText });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in updating text.", error: error.message });
  }
};

const getText = async (req, res) => {
  try {
    const textData = await TextModel.find();
    return res
      .status(200)
      .json({ msg: "Data fetched successfully.", data: textData });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error in fetching text data.", error: error.message });
  }
};

module.exports = { addText, updateText, getText };
