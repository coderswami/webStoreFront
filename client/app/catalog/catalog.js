'use strict';

angular.module('onlineStoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('catalog', {
                parent: 'store',
                url: '/catalog',
                data: {
                    authorities: [],
                    pageTitle: 'onlineStoreApp.catalog.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/catalog/templates/catalog.tmpl.html',
                        controller: 'CatalogController'
                    }
                },
                resolve: {
                }
            });
    });
