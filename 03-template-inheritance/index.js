const express= require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

const app = express();

app.set("view engine", "hbs");

// setup route
app.get("/",(req,res)=>{
    res.render("index");
})


// start server
app.listen(3000,()=>{
    console.log("Server has started");
});