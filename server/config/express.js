var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //Why?
var routes = require('../core/routes');
var path = require('path');

app.use(express.static('public'));
app.use(express.static('application'));
app.use(bodyParser.urlencoded({extended: true})); //Why?

app.use(bodyParser.json()); //Why?
routes(app); //Why?
module.exports = app; //Why?
