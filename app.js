const express = require("express");
const app = express();
const path = require("path");

// const port = process.env.PORT || 3000 esto con heroku;
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(express.static(__dirname + "/public"))

app.use("/", require("./router/RutasWeb"));

app.use("/mascotas", require("./router/Mascotas"))

app.use((req, res, next) => {
    res.status(404).render("404", { title404: "This is 404 page" });
})

app.listen(port, () => {
    console.log(`{Server listen on http://localhost:${port}`);
});
