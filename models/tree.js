var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/tree_database');

var TreeSchema = new mongoose.Schema({
    nome_pop: {
        type: String,
        unique: false,
        required: true
    },
    nome_cie: {
        type: String,
        unique: false,
        required: true
    },
    info: {
        type: String,
        unique: false,
        required: true,
    },
    lat: {
        type: String,
        required: true,
        required: true,
    },
    long: {
        type: String,
        unique: false,
        required: true,
    }

})


module.exports = mongoose.model('Tree', TreeSchema);

 