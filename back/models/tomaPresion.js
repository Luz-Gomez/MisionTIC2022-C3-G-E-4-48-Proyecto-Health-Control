const tomaPresionModel = require("../models/tomaPresion")

module.exports = class TomaPresionController {

    static async getBymail(req, res) {
        const mail = req.params.mail
        try{
            const tomaPresion = await tomaPresionModel.find({ "mail": mail });
            if (tomaPresion != null){
                res.status(200).json(tomaPresion);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(404).json({message: err.message});        
        }
    }

    static async insert(req, res) {
        try{
            const tomaPresion = req.body;
            const nuevoPresion = await tomaPresionModel.create(tomaPresion);
            res.status(201).json(nuevoPresion);
        } catch (err) {
            res.status(400).json({message: err.message});         
        }
    }
}
