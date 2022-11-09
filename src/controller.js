const mongoose = require("mongoose");
const { db } = require("./database");
const JobModel = require("./jobpost.model");
const JobSchema = require("./jobpost.model");
const UserModel = require("./model");

const Signup = async (req, res) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
      usertype: req.body.usertype,
    };

    const user = new UserModel(data);

    const response = await user.save();

    if (response) {
      return res.status(200).json({ message: "success", response });

      // return response;
    }
  } catch (err) {
    res.status(401).json({ message: "error", err });
  }
};

const Signin = async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const user = await db
      .collection("users")
      .findOne({ email: data.email, password: data.password });
    return res.status(200).json({ message: "success", user });
  } catch (err) {
    return res.status(401).json({ message: "error", err });
  }
};

const postAJob = async (req, res) => {
  const data = {
    job_title: req.body.job_title,
    job_id: req.body.job_id,
  };

  try {
    const job = new JobModel(data);
    const response = await job.save();

    if (response) {
      return res.status(200).json({ message: "success", response });
    }
  } catch (err) {
    return res.status(401).json({ message: "error", err });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    return res.status(200).json({ message: "success", jobs });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Signup, Signin, postAJob, getAllJobs };
