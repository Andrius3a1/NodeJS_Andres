const express = require("express");
const app = express();
const path = require("path");

// const port = process.env.PORT || 3000 esto con heroku;
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index", {
        title1: "t1",
    })
});

app.get("/services", (req, res) => {
    res.render("services", {
        titleServices1: "Services1"
    })
});

app.get("/products", (req, res) => {
    res.render("products", {
        titleProduct1: "producto 1"
    })
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        titleContact1: "contact 1",
    })
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        title404: "This is 404 page",
        dinamicTitle: "Dinamic title from app.js"
    });
})

app.listen(port, () => {
    console.log(`{Server listen on http://localhost:${port}`);
});
