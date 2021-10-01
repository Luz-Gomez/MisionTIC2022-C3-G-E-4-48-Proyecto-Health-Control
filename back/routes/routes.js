const express = require("express");
const router = express.Router();

//Rutas de Registros

//Rutas de tips
router.get("/imc", () => {
    return [
    {
        "tip0": "Estás bien, sigue así! y no olvides cuidarte"
    }
];
});