const express = require("express");
const UsuariosController = require("../controllers/usuariosController");
const PerfilUsuarioController = require("../controllers/perfilUsuarioController");

//Carga de archivos
const multer = require("multer");
const ConsejosController = require("../controllers/consejosController");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./cargas");
    },
    filename: (req, res, cb) => {
        cb(null, file.filename+"_"+Date.now()+"_"+file.originalname);
    }
});

const cargas = multer({storage: storageConfig});

const router = express.Router();

//Rutas de Login
router.post("/usuarios", UsuariosController.insert);
router.post("/autenticar", UsuariosController.validarUsuario);

//Rutas de perfil de usuario
router.post("/perfilUsuario", PerfilUsuarioController.insert);
router.get("/perfilUsuario", PerfilUsuarioController.getAll);
router.get("perfilUsuario/:id", PerfilUsuarioController.getById);
router.put("/perfilUsuario7:id", PerfilUsuarioController.update);

//Rutas de los consejos
router.get("/consejos", ConsejosController.getAll);
router.get("/consejos", ConsejosController.getById);

module.exports = router;