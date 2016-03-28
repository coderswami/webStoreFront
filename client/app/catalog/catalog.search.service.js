'use strict';

angular.module('onlineStoreApp')
    .factory('CatalogSearch', function ($resource) {
        return $resource('api/_search/catalogs/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
