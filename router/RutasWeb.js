const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title1: "This is the START page" })
});

router.get("/services", (req, res) => {
    res.render("services", { titleServices: "This is the SERVICES page" })
});

router.get("/products", (req, res) => {
    res.render("products", { titleProduct: "This is the PRODUCTS page" })
})

router.get("/contact", (req, res) => {
    res.render("contact", { titleContact: "This is the CONTACT page" })
})



module.exports = router;