const express = require("express");
const middlewarConfig = require("./appconfig");
const router = require("./routes");
const app = express();

const port = 6001;

middlewarConfig(app);
app.use(router);
app.listen(port, () => {
  console.log("Server is connected!");
});
