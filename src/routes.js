const { Signup, Signin, postAJob, getAllJobs } = require("./controller");
const express = require("express");
const router = express.Router();

const PATH = {
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  POSTJOB: "/post_job",
  GETALLJOBS: "/get_jobs",
};

//signup
router.post(PATH.SIGNUP, Signup);

//SignIn
router.post(PATH.SIGNIN, Signin);

//Post a job
router.post(PATH.POSTJOB, postAJob);

//Get all the jobs
router.get(PATH.GETALLJOBS, getAllJobs);

module.exports = router;
