const mongoose = require("mongoose");

const perfilUsuarioSchema = mongoose.Schema({
    "mail": String,
    "nombre": String,
    "apellido": String,
    "fechaNacimiento": Date,
    "estatura": Number,
    "peso": Number,
    "celular": String,
    "nombreMedico": String,
    "apellidoMedico": String,
    "visibilidad": Boolean,
    "alerta": Boolean,
    "imc": Number,
    "categoriaPeso": String
});

module.exports = mongoose.model("perfilUsuario", perfilUsuarioSchema, "PerfilUsuario")
