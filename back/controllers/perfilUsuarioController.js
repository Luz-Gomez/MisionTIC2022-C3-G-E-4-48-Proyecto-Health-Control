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
        const id = req.params.id
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
        try {
        const perfilUsuario = req.body;
        const newPerilUsuario = await perfilUsuarioModel.create(perfilUsuario);
        res.status(201).json(newPerilUsuario);
        } catch(err) {
        res.status(400).json({message:err.message});
        }
    }

    static async update(req, res) {  
        try {
            const id = req.params.id
            const perfilUsuario = req.body;
            const newPerilUsuario = await perfilUsuarioModel.updateOne(perfilUsuario);
            res.status(200).json(newPerilUsuario);
            } catch(err) {
            res.status(400).json({message:err.message});
            }
        }
    }
