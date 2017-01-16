var fs = require('fs');
var path = require('path');
var Constants = require('../api/global');
var Discography = require(path.resolve('server/module/Discography'));

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.resolve('application/index.html'));
    });

    app.get('/api/getDiscography', function(req, res){
        var discography = new Discography();
    	var artists = discography.getArtists();
    	fs.writeFile(Constants.JsonSrcData + discography.jsonName, JSON.stringify(artists, null, 4) , function(error) {
	        if (error) {
	            console.error("write error:  " + error.message);
	        } else {
	            console.log('JSON escrito com sucesso! O arquivo está na raiz do projeto.');
	            res.end();
	        }
   	 	});
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
