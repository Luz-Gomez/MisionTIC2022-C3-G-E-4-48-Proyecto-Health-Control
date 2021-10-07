const mongoose = require("mongoose");

const perfilMedicoSchema = mongoose.Schema({
    "mail": String,
    "nombre": String,
    "apellido": String,
    "celular": String,
    "institucion": String,
    "regInstitucion": String,
    "tarjetaProf": String,
    "acepta": Boolean,
    "alerta": Boolean
});

module.exports = mongoose.model("perfilMedico", perfilMedicoSchema, "PerfilMedico")
