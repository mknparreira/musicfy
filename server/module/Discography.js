var fs = require('fs');
var slug = require('slug');
var _ = require('underscore');
var srcpath = './public/discoteca';

var Discography = function() {
    this.jsonName = "discography.json";
};

Discography.prototype.getArtists = function() {
    var result = {
        artists: []
    };
    var artists = fs.readdirSync(srcpath);
    artists.forEach(function(artist) {
        var jsonDataArtist = {};
        jsonDataArtist['name'] = artist;
        jsonDataArtist['artist_path'] = srcpath + '/' + artist;
        jsonDataArtist['slug'] = slug(artist, {
            lower: true
        });
        result.artists.push(jsonDataArtist);
    });
    return result;
};

Discography.prototype.getArtist = function(artist_slug) {
    var artist = _.findWhere(this.getArtists().artists, {slug: artist_slug });
    var albums = _.where(this.getAlbums().albums, { artist_slug: artist_slug});
    var result = {
        profile: artist,
        albums: albums
    };
    return result;
};

Discography.prototype.getAlbums = function() {
    var result = {
        albums: []
    };
    this.getArtists().artists.forEach(function(artist) {
        var albums = fs.readdirSync(artist.artist_path);
        albums.forEach(function(album) {
            var jsonDataAlbum = {};
            jsonDataAlbum['artist_slug'] = artist.slug;
            jsonDataAlbum['title'] = album;
            jsonDataAlbum['album_path'] = artist.artist_path + '/' + album;
            jsonDataAlbum['album_slug'] = slug(album, {
                lower: true
            });
            result.albums.push(jsonDataAlbum);
        });
    });
    return result;
};

Discography.prototype.getAlbum = function(slug_artist, slug_album) {
    var artist = _.findWhere(this.getArtists().artists, {slug: slug_artist });
    var album = _.findWhere(this.getAlbums().albums, {album_slug: slug_album});
    var songs = fs.readdirSync(album.album_path);
    var result = {
        profile: artist,
        album: album,
        songs: []
    };

    songs.forEach(function(song){
        var jsonDataSong = {};
        jsonDataSong['artist_slug'] = artist.slug;
        jsonDataSong['album'] = album.slug;
        jsonDataSong['track'] = song;
        jsonDataSong['song_path'] = album.album_path + '/' + song;
        jsonDataSong['album_slug'] = slug(song, {lower: true});
        result.songs.push(jsonDataSong);
    });
    return result;
};

Discography.prototype.getSongs = function() {
    var result = {
        songs: []
    };
    this.getAlbums().albums.forEach(function(album) {
        var songs = fs.readdirSync(album.album_path);
        songs.forEach(function(song) {
            var jsonDataSong = {};
            jsonDataSong['artist_slug'] = album.artist_slug;
            jsonDataSong['album_slug'] = album.album_slug;
            jsonDataSong['track'] = song;
            jsonDataSong['song_path'] = album.album_path + '/' + song;
            jsonDataSong['song_slug'] = slug(song, {lower: true});
            result.songs.push(jsonDataSong);
        });
    });
    return result;
};
module.exports = Discography;
