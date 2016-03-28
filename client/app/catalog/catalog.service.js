'use strict';

angular.module('onlineStoreApp')
    .factory('Catalog', function ($resource) {
        return $resource('api/catalog/:id/:controller/:id2/:controller2', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getActiveCatalog': {
                method: 'GET',
                params: {'id': 'active'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getCategoriesByCatalog': {
                method: 'GET',
                params: {'controller': 'categories'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
