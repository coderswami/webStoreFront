'use strict';

angular.module('onlineStoreApp')
    .factory('Order', function ($resource) {
        return $resource('api/order/:id/:controller/:id2/:controller2', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'getCart': {
                method: 'GET',
                params: {'id': 'type', 'controller': 'cart'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'createCart': {
                method: 'POST',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'saveOrderItem': {
                method: 'PUT',
                params: {'id': 'item'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'createPayment': {
                method: 'POST',
                params: {'controller': 'payment'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'createShipment': {
                method: 'POST',
                params: {'controller': 'shipment'},
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
