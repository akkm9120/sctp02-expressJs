const express = require("express");
const app = express();

app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
})

app.get('/hello/:name', (req,res)=>{
    let name = req.params.name;
    console.log()
      res.send("<h1>Hi, " + name+"</h1>");
})

app.listen(3000,function(){
    console.log("Server has started...");
})