const mongoose = require("mongoose");
const { db } = require("./database");

const jobSchema = {
  job_title: {
    type: String,
  },
  job_id: {
    type: String,
  },
};

const JobModel = db.model("job", jobSchema);

module.exports = JobModel;
