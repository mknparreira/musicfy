(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('ArtistsController', ArtistsController);

    ArtistsController.$inject = ['_', '$http', 'discographies'];

    function ArtistsController(_, $http, discographies) {
        var vm = this;
        var collection = discographies.data;
        vm.artists = collection.artists;
    }
})();

(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('ArtistController', ArtistController);

    ArtistController.$inject = ['_', '$http', 'discographies'];

    function ArtistController(_, $http, discographies) {
        var vm = this;
        var collection = discographies.data;
        vm.albums = collection.albums;
        vm.artist = collection.profile;
    }
})();
