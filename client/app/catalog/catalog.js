'use strict';

angular.module('onlineStoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('catalog', {
                parent: 'store',
                abstract: true,
                url: '/catalog'
            })
            .state('catalog.products', {
                parent: 'catalog',
                url: '/:catalogId/categories/:categoryId/products',
                views: {
                    'content@store': {
                        templateUrl: 'app/catalog/templates/product.list.tmpl.html',
                        controller: 'CatalogController'
                    }
                },
                resolve: {
                    products: ['$stateParams', 'Catalog', function($stateParams, Catalog) {
                        var products = [];
                        Catalog.getProductsByCategory({id: $stateParams.catalogId, id2: $stateParams.categoryId}).$promise.then(function(result) {
                            console.log(result);
                            products = result;
                        });
                        return products;
                    }]
                }
            });
    });
