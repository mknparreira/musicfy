var fs = require('fs');
var slug = require('slug');
var _ = require('underscore');
var srcpath = './public/discoteca';

var Discography = function() {
    this.srcpath = srcpath;
    this.jsonName = "discography.json";
};

Discography.prototype.getBandsFolder = function () {
    var result = {
        artists : []
    };
    var artists = fs.readdirSync(srcpath);
    artists.forEach(function(artist){
        var jsonDataArtist = {};
        jsonDataArtist['name'] = artist;
        jsonDataArtist['slug'] = slug(artist, {lower: true});
        jsonDataArtist['artist_path'] = srcpath + '/' + artist;
        jsonDataArtist['albums'] = [];
        result.artists.push(jsonDataArtist);
    });
    return result;
};

Discography.prototype.getArtists = function(){
    var bands = this.getBandsFolder();
    bands.artists.forEach(function(band){
        var albums = fs.readdirSync(band.artist_path);
        albums.forEach(function(album){
            var jsonDataAlbum = {};
            jsonDataAlbum['title'] = album;
            jsonDataAlbum['album_path'] = band.artist_path + '/' + album;
            jsonDataAlbum['slug'] = slug(album, {lower:true});
            jsonDataAlbum['songs'] = [];
            band.albums.push(jsonDataAlbum);
        });
    });
    return bands;
};

Discography.prototype.getArtist = function(artist){
    var data = this.getArtists();
    return _.findWhere(data.artists, {slug: artist});
};

Discography.prototype.getAlbum = function(artist) {
    var album = _.findWhere(this.getArtist(artist.artist_slug).albums, {slug: artist.album_slug});
    var songs = fs.readdirSync(album.album_path);
    songs.forEach(function(song){
        var jsonDataSong = {};
        jsonDataSong['title'] = song;
        jsonDataSong['slug'] = slug(song, {lower:true});
        jsonDataSong['music_path'] = album.album_path + '/' + song;
        album.songs.push(jsonDataSong);
    });
    return album;
};

module.exports = Discography;
