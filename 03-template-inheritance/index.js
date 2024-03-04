const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

const app = express();

app.set("view engine", "hbs");
waxOn.on(hbs.handlebars);  // apply wax-on to handlebars
waxOn.setLayoutPath('./views/layouts'); // where to find the layout

// setup route
app.get("/", (req, res) => {
    res.render("index");
})




// start server
app.listen(3000, () => {
    console.log("Server has started");
});