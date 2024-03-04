//steps "require" "route" "server"

const express = require("express");
const app = express ();
const hbs = require("hbs");

app.set("view engine", "hbs");

const foodRecords = [
    {
        id: 1,
        foodName: "Chicken Rice",
        calories: 500,
        meal:"lunch",
        tags:["organic", "less-oil"]
    },
    {
        id: 2,
        foodName:"Boston Clam Chowder",
        calories: 750,
        meal:"dinner",
        tags:["home-cooked"]
    },
    {
        id: 3,
        foodName:"Tuna Sandwich",
        calories: 600,
        meal:"snack",
        tags:["gluten-free"]
    }
];

app.get("/",function(req,res){
    res.render("index",{
        'foodRecords' : foodRecords 
    });
})

app.get("/delete-listing/:id",(req,res)=>{
    res.render("delete-listing",{
        
    })
})

app.listen(3000,function (){
    console.log("Server has started...");
})
