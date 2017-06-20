'use strict';
app.controller('albumsCtrl', ['$scope', '_', '$http', 'discographies',
    function ($scope, _, $http, discographies) {
        var collection = discographies.data;
        $scope.albums = collection.albums;
    }
]);

app.controller('albumsViewCtrl', ['$scope', '_', '$http', 'discographies',
     function($scope, _, $http, discographies) {
        var collection = discographies.data;
        //Utility.helloWorld("olaaaaaa");
        $scope.artist = collection.profile;
        $scope.album = collection.album;
        $scope.songs = collection.songs;
    }
]);
