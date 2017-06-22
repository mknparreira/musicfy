(function() {
    'use strict';

    angular
        .module('songfy')
        .config(Routes);

    function Routes($routeProvider) {
        //$locationProvider
        // remove o # da url
        //$locationProvider.html5Mode(true);
        $routeProvider.when('/artists', {
            templateUrl: 'views/artists/index.html',
            controller: 'ArtistsController',
            controllerAs: 'ArtistsView',
            resolve: {
                discographies: ['DiscographyAPI', function(DiscographyAPI) {
                    return DiscographyAPI.getArtists();
                }]
            }
        });

        $routeProvider.when('/artist/:slug', {
            templateUrl: 'views/artists/artist.html',
            controller: 'ArtistController',
            controllerAs: 'ArtistView',
            resolve: {
                discographies: ['DiscographyAPI', '$route', function(DiscographyAPI, $route) {
                    return DiscographyAPI.getArtist($route.current.params.slug);
                }]
            }
        });

        $routeProvider.when('/albums', {
            templateUrl: 'views/albums/index.html',
            controller: 'AlbumsController',
            controllerAs: 'AlbumsView',
            resolve: {
                discographies: ['DiscographyAPI', function(DiscographyAPI) {
                    return DiscographyAPI.getAlbums();
                }]
            }
        });

        $routeProvider.when('/album/:slugArtist/:slugAlbum', {
            templateUrl: 'views/albums/album.html',
            controller: 'AlbumController',
            controllerAs: 'AlbumView',
            resolve: {
                discographies: ['DiscographyAPI', '$route', function(DiscographyAPI, $route) {
                    return DiscographyAPI.getAlbum($route.current.params.slugArtist, $route.current.params.slugAlbum);
                }]
            }
        });

        $routeProvider.when('/songs', {
            templateUrl: 'views/songs/index.html',
            controller: 'SongsController',
            controllerAs: 'SongsView',
            resolve: {
                discographies: ['DiscographyAPI', function(DiscographyAPI) {
                    return DiscographyAPI.getSongs();
                }]
            }
        });

        $routeProvider.when('/playlists', {
            templateUrl: 'views/playlists/index.html',
            controller: 'PlaylistsController'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
