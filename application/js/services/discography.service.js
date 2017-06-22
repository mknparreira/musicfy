(function() {
    'use strict';

    angular
        .module('songfy')
        .factory('DiscographyAPI', ['$http', 'config', DiscographyAPI]);

    function DiscographyAPI($http, config) {
        var service = {
            getArtists: _getArtists,
            getArtist: _getArtist,
            getAlbums: _getAlbums,
            getAlbum: _getAlbum,
            getSongs: _getSongs,
        };

        return service;

        function _getArtists () {
            return $http.get(config.baseUrl + '/api/artists');
        };

        function _getArtist (slug) {
            return $http.get(config.baseUrl + '/api/artist/' + slug);
        };

        function _getAlbums () {
            return $http.get(config.baseUrl + '/api/albums');
        };

        function _getAlbum (slugArtist, slugAlbum) {
            return $http.get(config.baseUrl + '/api/album/' + slugArtist + '/' + slugAlbum);
        };

        function _getSongs () {
            return $http.get(config.baseUrl + '/api/songs/');
        };
    }
})();
