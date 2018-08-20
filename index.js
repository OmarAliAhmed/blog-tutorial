const mongoose = require("mongoose");
const path = require("path")
const config = require("./config/database");
const express = require("express"),
      app = express();

mongoose.connect(config.uri, ()=> {
    console.log(`Connected to database : ${config.db}`)
})

app.use(express.static(__dirname + "/client/dist/client"))

app.get("/",(req,res)=> {res.render(path.join(__dirname + "/client/dist/client/index.html"))});


app.listen(3000, ()=> console.log("Listening on port 3000 !"))