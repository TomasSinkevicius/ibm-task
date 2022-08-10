const express = require("express");
const router = express.Router();
const actionTemplateCopy = require("../models/actionModels");

router.post("/action", (request, response) => {
  console.log(request.body);
  const action = new actionTemplateCopy({
    companyName: request.body.companyName,
    dateFrom: request.body.dateFrom,
    dateTo: request.body.dateTo,
    stockPriceHistory: request.body.stockPriceHistory,
  });
  action
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
