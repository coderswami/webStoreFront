'use strict';

angular.module('onlineStoreApp')
    .factory('User', function ($resource) {
        return $resource('api/user/:id/:controller/:id2/:controller2', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getUserProfile': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'saveUserAddress': {
                method: 'PUT',
                params: {'id': 'address'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
