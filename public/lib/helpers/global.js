 (function (window, document) {
     'use strict';

     // attach Utility as a property of window
     var Utility = window.Utility || (window.Utility = {});

     function helloWorld(message) {
         alert(message);
     }

     function publishExternalAPI(Utility) {
         angular.extend(Utility, {
             'helloWorld': helloWorld,
         });
     }
     publishExternalAPI(Utility);

 })(window, document);
