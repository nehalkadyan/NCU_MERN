const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRouter = require("./routes/Auth.routes");
const cors = require("cors");

dotenv.config()
// import express from "express"

// setting up app from express
const app = express();

app.use(express.json());

app.use(cors())

// connecting to database

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => console.log("Error connecting with MongoDB", err))

// api endpoint

// app.get("/bye", (req, res) => {
//     return res.status(200).send("<h1>Hello from Node App</h1>")
// })

app.use("/auth", AuthRouter)


// setup a server on a port

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})

// dsRoRbG5GuRoyQXt

