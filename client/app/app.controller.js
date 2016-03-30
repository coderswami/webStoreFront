'use strict';

angular.module('onlineStoreApp')
    .controller('AppController', function ($scope, $state, $cookies, User, Catalog, Order) {

        $scope.cartCookieCreator = function () {
            if($cookies.get('webstore-cart')==undefined || $cookies.get('webstore-cart')==null) {
                $cookies.put('webstore-cart', Date.now());
            }
        };

        console.log($cookies.getAll());

        $scope.user = {};

        $scope.loadGuestUser = function() {
            User.getUserProfile({id: 1}).$promise.then(function(result) {
                console.log(result);
                $scope.user = result;
            });
        };

        $scope.loadGuestUser();

        $scope.showCart = false;

        $scope.toggleCartView = function() {
            if($scope.showCart) {
                $scope.showCart = false;
            }else {
                if($scope.cart!=null) {
                    $scope.showCart = true;
                }
            }
        }

        $scope.country = null;
        $scope.states = null;
        $scope.catalog = {};
        $scope.categories = [];
        $scope.products = null;
        $scope.cart = null;
        $scope.payment = {};
        $scope.shipment = {};

        $scope.loadCountryAndStates = function() {
            Catalog.getCountryByCode({controller: 'IN'}).$promise.then(function(result) {
                console.log(result);
                $scope.country = result;
                Catalog.getStatesByCountry({controller: $scope.country.id}).$promise.then(function(results) {
                    console.log(results);
                    $scope.states = results;
                })
            });
        };

        $scope.loadCountryAndStates();

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

        $scope.fetchCartOrder = function() {
            Order.getCart({id2: $cookies.get('webstore-cart')}).$promise.then(function(result) {
                console.log(result);
                $scope.cart = result;
            });
        };

        $scope.fetchCartOrder();

        $scope.updateCart = function (product) {
            if($scope.cart == null) {
                $scope.cartCookieCreator();
                $scope.cart = {
                    'type': 'CART',
                    'status': 'IN_PROCESS',
                    'orderTotal': 0.0,
                    'cookie': $cookies.get('webstore-cart')
                };
                Order.createCart($scope.cart).$promise.then(function(order) {
                    console.log(order);
                    $scope.cart = order;
                    console.log($scope.cart);
                    $scope.cart.items = [];
                    var orderItem = {
                        'orderHeader': order,
                        'product': product,
                        'quantity': 1,
                        'price': product.price.salesPrice,
                        'status': product.status
                    };
                    Order.saveOrderItem(orderItem).$promise.then(function(item) {
                        console.log(item);
                        $scope.cart.items.push(item);
                    });
                });
            }else {
                console.log($scope.cart);
                var orderItem = null;
                if($scope.cart.items.length > 0) {
                    for(var i in $scope.cart.items) {
                        console.log($scope.cart.items);
                        console.log(product);
                        if($scope.cart.items[i].product.id == product.id) {
                            orderItem = $scope.cart.items[i];
                            orderItem.quantity += 1;
                            orderItem.price = orderItem.quantity * product.price.salesPrice;
                            break;
                        }
                    }
                    if(orderItem == null) {
                        orderItem = {
                            'orderHeader': $scope.cart,
                            'product': product,
                            'quantity': 1,
                            'price': product.price.salesPrice,
                            'status': product.status
                        };
                    }
                }else {
                    orderItem = {
                        'orderHeader': $scope.cart,
                        'product': product,
                        'quantity': 1,
                        'price': product.price.salesPrice,
                        'status': product.status
                    };
                }
                Order.saveOrderItem(orderItem).$promise.then(function(item) {
                    console.log(item);
                    console.log(product);
                    $scope.cart.items.push(item);
                });
            }
        };

        $scope.createPayment = function(order) {
            console.log(order);
            $scope.payment.type = 'COD';
            if($scope.payment.type != 'COD') {
                $scope.payment.status = 'CONFIRMED';
            }else {
                $scope.payment.status = 'IN_PROCESS';
            }
            $scope.payment.amount = order.orderTotal;
            Order.createPayment({id: order.id},$scope.payment).$promise.then(function(result) {
                console.log(result);
                $scope.cart = null;
                $scope.payment = result;
                $scope.createShipment(order);
            });
        };

        $scope.createShipment = function(order) {
            var address = {
                'name': 'Subhankar',
                'streetAddress': 'abc 520',
                'city': 'Hyderabad',
                'pin': '500033',
                'phone': '7032905611',
                'userProfile': $scope.user,
                'country': $scope.country,
                'state': $scope.state
            };
            User.saveUserAddress(address).$promise.then(function(result) {
                console.log(result);
                $scope.shipment.address = result;
                $scope.shipment.type = 'NORMAL';
                $scope.shipment.status = 'IN_PROCESS';
                console.log($scope.shipment);
                Order.createShipment({id: order.id},$scope.shipment).$promise.then(function(result) {
                    console.log(result);
                    $scope.shipment = result;
                });
            });

        };
    });
