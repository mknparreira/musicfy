(function() {
    'use strict';

    angular
        .module('songfy')
        .controller('GeneralController', GeneralController);

    function GeneralController() {
        var vm = this;
        vm.app = 'Sistema';
    }
})();
