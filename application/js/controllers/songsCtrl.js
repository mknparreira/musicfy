'use strict';
app.controller('songsCtrl', ['$scope', '_', '$http', 'discographies',
    function ($scope, _, $http, discographies) {
        var collection = discographies.data;
        $scope.songs = collection.songs;
    }
]);
