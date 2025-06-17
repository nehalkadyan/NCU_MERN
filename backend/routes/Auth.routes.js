const express = require("express");
const {signup} = require("../controllers/Auth.controller")

// setup router

const router = express.Router();

// routes

router.post("/signup", signup);

module.exports = router;