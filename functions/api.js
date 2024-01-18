const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Babies = require("../routes/babies");
const cors = require("cors");
const serverless = require("serverless-http");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/babies", Babies);

// app.get("/", (req, res) => res.status(200).json())

mongoose.connect("mongodb+srv://kobeiganehealth:kobeigane1234@cluster0.sinqmir.mongodb.net/", {useNewUrlParser: true,
    useUnifiedTopology: true,}).then(()=>{
        console.log("DB Connection Successfull!");
    }).catch((err) => {
        console.log(err)
    })
    module.exports.handler =serverless(app);