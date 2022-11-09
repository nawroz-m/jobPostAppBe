const mongoose = require("mongoose");
const { initialize } = require("mongoose-auto-increment");
let db;
const URL = "mongodb://localhost:27017/assynment";
const CONNECTED = "connected";
const DISCONNECTED = "disconnected";

(async () => {
  try {
    db = mongoose.createConnection(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("Error while connecting with DB ", err);
  }
})();

initialize(db);
db.on(CONNECTED, () => {
  console.log(`Successfully connected to DB ${URL} `);
});
db.on(DISCONNECTED, () => {
  console.log(`Connection error while connecting at ${URL}`);
});

module.exports.db = db;
