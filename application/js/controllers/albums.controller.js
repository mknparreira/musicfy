(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('AlbumsController', AlbumsController);

    AlbumsController.$inject = ['_', '$http', 'discographies'];

    function AlbumsController (_, $http, discographies) {
        var vm = this;
        var collection = discographies.data;
        vm.albums = collection.albums;
    }
})();

(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['_', '$http', 'discographies'];

    function AlbumController (_, $http, discographies) {
        var vm = this;
        var collection = discographies.data;
        //Utility.helloWorld("olaaaaaa");
        vm.album = collection.album;
        vm.artist = collection.profile;
        vm.songs = collection.songs;
    }
})();
