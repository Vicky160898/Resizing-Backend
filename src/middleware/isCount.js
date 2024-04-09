const RequestCount = require("../model/countSchema");

const countRequests = async (req, res, next) => {
  try {
    const { path } = req;

    let requestCount = await RequestCount.findOne({ endpoint: path });
    if (!requestCount) {
      requestCount = new RequestCount({ endpoint: path });
    }

    requestCount.count += 1;
    await requestCount.save();

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = countRequests;
