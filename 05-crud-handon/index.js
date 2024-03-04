//steps "require" "route" "server"

const express = require("express");
const app = express ();
const hbs = require("hbs");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

const handlebarHelpers = require('handlebars-helpers')({
    handlebars: hbs.handlebars
});


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
    const idToDel = req.params.id;
    const delRow = foodRecords.find(function(record){
        return record.id == idToDel;
    })

    res.render("delete-listing",{
        record: delRow
    });
})


app.post("/delete-listing/:id",(req,res)=>{
    const id = req.params.id ;
    
    const indexToDelete = foodRecords.findIndex(function(record){
        return record.id == id;
    })

    foodRecords.splice(indexToDelete,1);
   res.redirect("/");
})


app.get("/update/:item",(req,res)=>{
    const id = req.params.item;

    const updateItem = foodRecords.find(function(record){
        return record.id == id;
    })


    console.log(updateItem)
    res.render("update",{
        record : updateItem
    })
})

app.post("/update/:item",(req,res)=>{
    const id = req.params.item;
    const indexUpdate = foodRecords.findIndex(function(record){
        return record.id == id;
    })

})

app.listen(3000,function (){
    console.log("Server has started...");
})
