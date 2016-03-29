'use strict';

angular.module('onlineStoreApp')
    .controller('AppController', function ($scope, $state, Catalog, CatalogSearch) {

        $scope.catalog = {};
        $scope.categories = [];
        $scope.products = null;

        $scope.loadAllCategories = function() {
            Catalog.getActiveCatalog({controller: 'IN'}).$promise.then(function(result) {
                console.log(result);
                $scope.catalog = result;
                Catalog.getCategoriesByCatalog({id: $scope.catalog.id}).$promise.then(function(results) {
                    console.log(results);
                    $scope.categories = results;
                })
            });
        };

        $scope.loadAllCategories();

        $scope.fetchProducts = function(category) {
            $scope.category = category;
            Catalog.getProductsByCategory({id: $scope.catalog.id, id2: $scope.category.id}).$promise.then(function(result) {
                console.log(result);
                $scope.products = result;
            });
        };


        // $scope.search = function () {
        //     CatalogSearch.query({query: $scope.searchQuery}, function(result) {
        //         $scope.catalogs = result;
        //     }, function(response) {
        //         if(response.status === 404) {
        //             $scope.loadAll();
        //         }
        //     });
        // };
        //
        // $scope.refresh = function () {
        //     $scope.loadAll();
        //     $scope.clear();
        // };
        //
        // $scope.clear = function () {
        //     $scope.catalog = {
        //         name: null,
        //         description: null,
        //         active: false,
        //         id: null
        //     };
        // };
    });
