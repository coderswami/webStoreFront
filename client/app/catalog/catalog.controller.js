'use strict';

angular.module('onlineStoreApp')
    .controller('CatalogController', ['$scope', '$state', 'products', function ($scope, $state, products) {

        console.log(products);
        $scope.products = products;
    }]);
