const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("mascotas",{
        arrayMascotas: [
            {id: "123", name: "rex", description: "rex descripcion"},
            {id: "456", name: "pink", description: "pink descripcion"},
            {id: "321", name: "max", description: "max descripcion"},
            {id: "654", name: "luz", description: "luz descripcion"}
        ]
    })
})

module.exports = router;