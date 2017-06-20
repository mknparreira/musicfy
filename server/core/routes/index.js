var fs = require('fs');
var path = require('path');
var Constants = require('../api/global');
var Discography = require(path.resolve('server/module/Discography'));

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.resolve('application/index.html'));
    });

    app.get('/api/artists/', function(req, res){
        var discography = new Discography();
        res.json(discography.getArtists());
    });

    app.get('/api/artist/:slug', function(req, res){
        var discography = new Discography();
        res.json(discography.getArtist(req.params.slug));
    });

    app.get('/api/albums/', function(req, res){
        var discography = new Discography();
        res.json(discography.getAlbums());
    });

    app.get('/api/album/:slugArtist/:slugAlbum', function(req, res){
        var discography = new Discography();
        res.json(discography.getAlbum(req.params.slugArtist, req.params.slugAlbum));
    });

    app.get('/api/songs/', function(req, res){
        var discography = new Discography();
        res.json(discography.getSongs());
    });

    /// Vou utilizar esse método para ficar observando se o diretório é alterado e assim gerar o arquivo json.
    // app.get('/testSincronia', function(req, res) {
    //     fs.watch(srcpath, function(eventType, filename){
    //         console.log("chegou aqui");
    //         if(filename){
    //             console.log(eventType);
    //             console.log(filename);
    //         }else{
    //             console.log('filename not provided');
    //         }

    //     });
    //  });


};
