'use strict';

angular.module('onlineStoreApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


