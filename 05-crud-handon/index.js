//steps "require" "route" "server"

const express = require("express");
const app = express ();
const hbs = require("hbs");

app.set("view engine", "hbs");

const databaase = [

]

app.get("/",function(req,res){

    res.render("index",{
        'products' : databaase 
    });
})


app.listen(3000,function (){
    console.log("Server has started...");
})
