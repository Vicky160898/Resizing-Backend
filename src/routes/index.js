const express = require("express");
const router = express.Router();
const {
  addText,
  getText,
  updateText,
  getCount,
  getCount1,
} = require("../controller");
const countRequests = require("../middleware/isCount");

router.post("/add/text", countRequests, addText);
router.post("/update/text", countRequests, updateText);
router.get("/get", getText);
router.get("/count", getCount);
router.get("/count/update", getCount1);

module.exports = router;
