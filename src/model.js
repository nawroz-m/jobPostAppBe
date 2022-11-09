const mongoose = require("mongoose");
const { db } = require("./database");

const UserScheme = {
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  usertype: {
    type: String,
  },
};

const UserModel = db.model("user", UserScheme);

module.exports = UserModel;
