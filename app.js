const express = require("express");
const app = express();
const path = require("path");

// const port = process.env.PORT || 3000 esto con heroku;
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index", { title1: "This is the START page" })
});

app.get("/services", (req, res) => {
    res.render("services", { titleServices: "This is the SERVICES page" })
});

app.get("/products", (req, res) => {
    res.render("products", { titleProduct: "This is the PRODUCTS page" })
})

app.get("/contact", (req, res) => {
    res.render("contact", { titleContact: "This is the CONTACT page" })
})

app.use((req, res, next) => {
    res.status(404).render("404", { title404: "This is 404 page" });
})

app.listen(port, () => {
    console.log(`{Server listen on http://localhost:${port}`);
});
