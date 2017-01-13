var api = require('../api');
var path = require('path');

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.resolve('application/index.html'));
    });

    // app.use('*', function(req, res) {
    //     res.sendfile(path.resolve('application/lib/angular/angular.js'));
    //     res.sendfile(path.resolve('application/lib/bootstrap/bootstrap.css'));
    // });
};
