var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var dataCtrl = require("mongoose");
var treeOp = require('./models/tree');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();

});

router.route('/saveData')
    .post(function (req, res) {
        var response = {};
        console.log(req.body);
        var Data = new treeOp({
            nome_pop: req.body.nome_pop,
            nome_cie: req.body.nome_cie,
            info: req.body.info,
            lat: req.body.loc.latitude,
            long: req.body.loc.longitude
        })

        Data.save(function (err) {
            if (err) {
                response = {
                    "Error": true,
                    "Message": "Error, code: " + err.code
                }
                return res.status(400).json(response);
            }
            response = {
                "Error": false,
                "Message": "Data added with success"
            }
            return res.json(response);
        })
    })

app.use('/', router);

app.listen(3000);
console.log('Ativo em 3000');
