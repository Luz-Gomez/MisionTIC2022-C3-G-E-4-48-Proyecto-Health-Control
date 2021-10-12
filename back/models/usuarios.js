const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    "mail": String,
    "tipo": String,
    "contraseña": String
});

module.exports = mongoose.model("usuario", usuariosSchema, "Usuarios");