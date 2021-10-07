const mongoose = require("mongoose");

const tomaPresionSchema = mongoose.Schema({
    "mail": String,
    "fecha": String,
    "sistole": Number,
    "diastole": Number,
    "pulso": Number,
    "presion": String
});

module.exports = mongoose.model("tomaPresion", tomaPresionSchema, "TomaPresion")
