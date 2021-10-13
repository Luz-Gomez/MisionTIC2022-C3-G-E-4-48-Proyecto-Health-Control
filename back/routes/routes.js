const express = require("express");
const UsuariosController = require("../controllers/usuariosController");
const PerfilUsuarioController = require("../controllers/perfilUsuarioController");
const ConsejosController = require("../controllers/consejosController");
const TomaPresionController = require("../controllers/tomaPresionController");
const PerfilMedicoController = require("../controllers/perfilMedicoController");

//Carga de archivos
const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./cargas");
    },
    filename: (req, res, cb) => {
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    }
});

const cargas = multer({storage: storageConfig});

const router = express.Router();

//Rutas de Login
router.post("/usuarios", UsuariosController.insert);
router.post("/autenticar", UsuariosController.validarUsuario);

//Rutas de perfil de usuario
router.get("/perfilUsuario", PerfilUsuarioController.getAll);
router.get("/perfilUsuario/:mail", PerfilUsuarioController.getBymail);
router.post("/perfilUsuario", PerfilUsuarioController.insert);
router.put("/perfilUsuario/:mail", PerfilUsuarioController.update);

//Rutas de toma de presion
router.get("/tomaPresion", TomaPresionController.getAll);
router.get("/tomaPresion/:mail", TomaPresionController.getBymail);
router.post("/tomaPresion", TomaPresionController.insert);

//Rutas de los consejos
router.get("/consejos", ConsejosController.getAll);
router.get("/consejos", ConsejosController.getById);

//Rutas de perfil de medico
router.get("/perfilMedico", PerfilMedicoController.getAll);
router.get("/perfilMedico/:mail", PerfilMedicoController.getBymail);
router.post("/perfilMedico", PerfilMedicoController.insert);
router.put("/perfilMedico/:mail", PerfilMedicoController.update);

module.exports = router;
