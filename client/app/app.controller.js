'use strict';

angular.module('onlineStoreApp')
    .controller('AppController', function ($scope, $state, Catalog, CatalogSearch) {

        $scope.catalog = {};
        $scope.loadAll = function() {
            Catalog.getActiveCatalog({controller: 'IN'}).$promise.then(function(result) {
                console.log(result);
                $scope.catalog = result;
            });
        };
        $scope.loadAll();


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
