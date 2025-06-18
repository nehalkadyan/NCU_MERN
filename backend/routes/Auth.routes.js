const express = require("express");
const {signup, signin} = require("../controllers/Auth.controller")

// setup router

const router = express.Router();

// routes

router.post("/signup", signup);
router.post("/signin", signin)

module.exports = router;