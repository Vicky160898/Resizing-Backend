const express = require("express");
const router = express.Router();
const { addText, getText, updateText } = require("../controller");
const countRequests = require("../middleware/isCount");

router.post("/add/text", countRequests, addText);
router.patch("/update/text", countRequests, updateText);
router.get("/get", getText);

module.exports = router;
