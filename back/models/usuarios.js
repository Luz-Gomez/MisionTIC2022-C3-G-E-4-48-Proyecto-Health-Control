const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    "usuario": String,
    "contraseña": String,
    "tipo": String,
});

module.exports = mongoose.model("Usuarios", usuariosSchema, "Usuarios")