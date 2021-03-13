const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
// paths location
const public = path.join(__dirname, "./public");
const partials = path.join(__dirname, "./views/partials");

// call static set hbs and set partials
app.use(express.static(public));
app.set("view engine", "hbs");
hbs.registerPartials(partials)


// routing
app.get("", (req, res) => {
    res.render("main")
})

app.get("/requests", (req, res) => {
    res.render("requests")
})

app.get("*", (req, res) => {
    res.render("404")
})

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });