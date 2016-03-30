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
            'getCountryByCode': {
                method: 'GET',
                params: {'id': 'countries'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getStatesByCountry': {
                method: 'GET',
                params: {'id': 'countries', 'id2': 'states'},
                isArray: true,
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
                isArray: true,
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getProductsByCategory': {
                method: 'GET',
                params: {
                    'controller': 'categories',
                    'controller2': 'products'
                },
                isArray: true,
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
