const express = require("express");
const UsuariosController = require("../controllers/usuariosController");

const router = express.Router();

//Rutas de registro de usuarios
router.post("/usuarios", UsuariosController.insert);
router.post("/autenticar", UsuariosController.validarUsuario);

module.exports = router;