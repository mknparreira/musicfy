'use strict';

app.controller('artistsCtrl', ['$scope', '_', '$http', 'discographies',
    function ($scope, _, $http, discographies) {
        var collection = discographies.data;
        $scope.artists = collection.artists;
    }
]);

app.controller('artistsViewCtrl', ['$scope', '_', '$http', 'discographies',
    function($scope, _, $http, discographies) {
        var collection = discographies.data;
        $scope.artist = collection.profile;
        $scope.albums = collection.albums;
    }
]);
