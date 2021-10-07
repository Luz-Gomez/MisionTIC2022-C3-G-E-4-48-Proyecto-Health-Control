const perfilMedicoModel = require("../models/perfilMedico")

module.exports = class PerfilMedicoController {
    static async getAll (req, res) {
        try{
            const perfilMedico = await perfilMedicoModel.find();
            res.status(200).json(perfilMedico);
        } catch (err) {
            res.status(404).json({message: err.message});     
        }
    }

    static async getBymail(req, res) {
        const mail = req.params.mail
        try{
            const perfilMedico = await perfilMedicoModel.findOne({ "mail": mail });
            if (perfilMedico != null){
                res.status(200).json(perfilMedico);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(404).json({message: err.message});        
        }
    }

    static async insert(req, res) {
        try{
            const perfilMedico = req.body;
            const nuevoMedico = await perfilMedicoModel.create(perfilMedico);
            res.status(201).json(nuevoMedico);
        } catch (err) {
            res.status(400).json({message: err.message});         
        }
    }
    
    static async update(req, res) {
        try {
            const mail = req.params.mail;
            const perfilMedico = req.body;
            const nuevoMedico = await perfilMedicoModel.updateOne({ "mail": mail }, perfilMedico)
            res.status(200).json(nuevoMedico);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}
