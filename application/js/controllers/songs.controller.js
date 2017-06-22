(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('SongsController', SongsController);

    SongsController.$inject = ['_', '$http', 'discographies'];

    function SongsController(_, $http, discographies) {
        var vm = this;
        var collection = discographies.data;
        vm.songs = collection.songs;
    }
})();
