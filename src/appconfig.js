const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const middlewarConfig = (app) => {
  // console.log("helloo ==============");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET,POST,OPTIONS,DELETE,PUT"
    // );
    // res.setHeader("Access-Control-Allow-Header", "*");
    next();
  });
};

module.exports = middlewarConfig;
