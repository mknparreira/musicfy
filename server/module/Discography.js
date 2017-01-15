var fs = require('fs');
var slug = require('slug');
var srcpath = './public/discoteca';
var Discography = {};

Discography.srcpath = srcpath;
Discography.jsonName = "discography.json";

Discography.getBands = function(){
    var result = {
        artists : []
    };
    var artists = fs.readdirSync(srcpath);
    artists.forEach(function(artist){
        var jsonData = {};
        var slug_artist = slug(artist, {lower: true});
        jsonData['name'] = artist;
        jsonData['slug'] = slug(artist, {lower: true});
        jsonData['artist_path'] = srcpath + '/' +artist;
        jsonData['albums'] = [];
        result.artists.push(jsonData);
    });
    return result;
};

Discography.getArtists = function(){
    var bands = Discography.getBands();
    var result = {
        artists : []
    };
    bands.artists.forEach(function(band){
        var albums = fs.readdirSync(band.artist_path);
        albums.forEach(function(album){
            var jsonDataAlbum = {};
            jsonDataAlbum['title'] = album;
            jsonDataAlbum['album_path'] = band.artist_path + '/' + album;
            jsonDataAlbum['slug'] = slug(album, {lower:true});
            band.albums.push(jsonDataAlbum);
        });
    });
    return bands;
};

Discography.getSongsByAlbum = function(album) {
    var musics = fs.readdirSync(album.album_path);
    musics.forEach(function(music){
        var jsonDataMusic = {};
        jsonDataMusic['title'] = music;
        jsonDataMusic['slug'] = slug(music, {lower:true});
        jsonDataMusic['music_path'] = album_path + '/' + music;
    });
    return jsonDataMusic;
};

module.exports = Discography;