const perfilUsuarioModel = require("../models/perfilUsuario")

module.exports = class PerfilUsuarioController {
    static async getAll (req, res) {
        try{
            const perfilUsuario = await perfilUsuarioModel.find();
            res.status(200).json(perfilUsuario);
        } catch (err) {
            res.status(404).json({message: err.message});     
        }
    }

    static async getBymail(req, res) {
        const mail = req.params.mail
        try{
            const perfilUsuario = await perfilUsuarioModel.findOne({ "mail": mail });
            if (perfilUsuario != null){
                res.status(200).json(perfilUsuario);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(404).json({message: err.message});        
        }
    }

    static async insert(req, res) {
        try{
            const perfilUsuario = req.body;
            const nuevoPerfil = await perfilUsuarioModel.create(perfilUsuario);
            res.status(201).json(nuevoPerfil);
        } catch (err) {
            res.status(400).json({message: err.message});         
        }
    }
    
    static async update(req, res) {
        try {
            const mail = req.params.mail;
            const perfilUsuario = req.body;
            const nuevoPerfil = await perfilUsuarioModel.updateOne({ "mail": mail }, perfilUsuario)
            res.status(200).json(nuevoPerfil);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}
