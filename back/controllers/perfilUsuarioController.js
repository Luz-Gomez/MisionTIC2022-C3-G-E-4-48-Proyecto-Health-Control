const perfilUsuarioModel = require("../models/perfilUsuario")

module.exports = class PerfilUsuarioController {
    static async getAll (req, res) {
        try{
            const perfilUsuario = await perfilUsuarioModel.find();
            res.status(200).json(perfilUsuario);
        } catch (err) {
            res.status(404).json({message: err.message})            
        }
    }

    static async getById(req, res) {
        try{
            const perfilUsuario = await perfilUsuarioModel.findOne({ "mail": id });
            if (perfil != null){
                res.status(200).json(perfilUsuario);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(404).json({message: err.message})            
        }
    }

    static async insert(req, res) {
        res.status(201).json();
    }

    static async update(req, res) {
        res.status(200).json();
    }
}
