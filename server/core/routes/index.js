var api = require('../api');
var path = require('path');

module.exports = function(app){
    app.get('/', function(req, response){
        response.sendFile(path.resolve('application/public/index.html'));
    });
};
