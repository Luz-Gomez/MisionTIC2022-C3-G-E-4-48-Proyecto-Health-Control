const  usuariosModel = require("../models/usuarios")

module.exports = class UsuariosController {

    static async insert (req, res) {
        try {
            let usuario = req.body;
            usuario = await usuariosModel.create(usuario);
            usuario.contraseña = undefined;
            res.status(201).json(usuario);
        } catch (err) {
            res.status(400).json({ "message": err.message })
        }  
    }
    
    static async validarUsuario(req, res) {
        try {
            const credenciales = req.body;
            const usuario = await usuariosModel.findOne({ "mail": credenciales.mail });
            if (usuario == undefined || usuario == null) {
                res.status(404).json({ "message": "Usuario no existe" });
            } else if (usuario.contraseña != credenciales.contraseña) {
                res.status(403).json({ "message": "Usuario o contraseña no válida" });
            } else {
                usuario.contraseña = undefined;
                res.status(200).json(usuario);
            }
            
        } catch (err) {
            res.status(400).json({"message": err.message})
        } 
    }
}