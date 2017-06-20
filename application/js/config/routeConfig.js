app.config(function($routeProvider) {
    //$locationProvider
    // remove o # da url
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/artists", {
        templateUrl: "views/artists/index.html",
        controller: "artistsCtrl",
        resolve: {
            discographies: ['discographyAPI', function(discographyAPI) {
                return discographyAPI.getArtists();
            }]
        }
    });

    $routeProvider.when("/artist/:slug", {
        templateUrl: "views/artists/artist.html",
        controller: "artistsViewCtrl",
        resolve: {
            discographies: ['discographyAPI', '$route', function(discographyAPI, $route) {
                return discographyAPI.getArtist($route.current.params.slug);
            }]
        }
    });

    $routeProvider.when("/albums", {
        templateUrl: "views/albums/index.html",
        controller: "albumsCtrl",
        resolve: {
            discographies: ['discographyAPI', function(discographyAPI) {
                return discographyAPI.getAlbums();
            }]
        }
    });

    $routeProvider.when("/album/:slugArtist/:slugAlbum", {
        templateUrl: "views/albums/album.html",
        controller: "albumsViewCtrl",
        resolve: {
            discographies: ['discographyAPI', '$route', function(discographyAPI, $route) {
                return discographyAPI.getAlbum($route.current.params.slugArtist, $route.current.params.slugAlbum);
            }]
        }
    });

    $routeProvider.when("/songs", {
        templateUrl: "views/songs/index.html",
        controller: "songsCtrl",
        resolve: {
            discographies: ['discographyAPI', function(discographyAPI) {
                return discographyAPI.getSongs();
            }]
        }
    });

    $routeProvider.when("/playlists", {
        templateUrl: "views/playlists/index.html",
        controller: "playlistsCtrl"
    });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
});
