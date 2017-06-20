app.factory("discographyAPI", ['$http', 'config', function($http, config) {

    var _getArtists = function (){
        return $http.get(config.baseUrl + "/api/artists");
    };

    var _getArtist = function (slug){
        return $http.get(config.baseUrl + "/api/artist/" + slug);
    };

    var _getAlbums = function (){
        return $http.get(config.baseUrl + "/api/albums");
    };

    var _getAlbum = function (slugArtist, slugAlbum){
        return $http.get(config.baseUrl + "/api/album/" + slugArtist + "/" + slugAlbum);
    };

    var _getSongs = function (){
        return $http.get(config.baseUrl + "/api/songs/");
    };

    return {
        getArtists : _getArtists,
        getArtist : _getArtist,
        getAlbums : _getAlbums,
        getAlbum : _getAlbum,
        getSongs : _getSongs,
    };

}]);
