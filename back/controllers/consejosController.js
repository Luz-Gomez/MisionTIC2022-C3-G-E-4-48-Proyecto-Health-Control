const consejosModel = require("../models/consejos");

module.exports = class ConsejosController {

    static async getAll (req, res) {
        try {
            const consejos = await consejosModel.find();
            res.status(200).json(consejos);
        } catch (err) {
            res.status(404).json({message: err.message})            
        } 
    }

    static async getById(req, res) {
        try{
            const consejos = await consejosModel.findOne({ "tipo": id });
            if (consjeo != null){
                res.status(200).json(consejos);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(400).json({message: err.message})            
        }
    }
}