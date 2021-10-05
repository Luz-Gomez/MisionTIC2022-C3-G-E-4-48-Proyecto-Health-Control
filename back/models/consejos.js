const mongoose = require("mongoose");

const consejosSchema = mongoose.Schema({
   "tipo": Number,
   "consejo" : String,
});

module.exports = mongoose.model("Consejos", consejosSchema, "Consejos")