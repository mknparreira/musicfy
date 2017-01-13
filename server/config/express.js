var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //Why?
var routes = require('../core/routes');

app.use(express.static('./public')); //Why?
app.use(bodyParser.urlencoded({extended: true})); //Why?

app.use(bodyParser.json()); //Why?
routes(app); //Why?
module.exports = app; //Why?
