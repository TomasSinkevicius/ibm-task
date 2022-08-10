const mongoose = require("mongoose");

const actionTemplate = new mongoose.Schema({
  companyName: { type: String, required: true },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  stockPriceHistory: { type: Object, required: true },
});

module.exports = mongoose.model("userAction", actionTemplate);
