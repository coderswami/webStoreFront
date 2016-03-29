'use strict';

angular.module('onlineStoreApp', [
    'LocalStorageModule',
    'ngResource',
    'ngCookies',
    'ngAria',
    'ngFileUpload',
    'ui.router',
    'infinite-scroll',
    'angular-loading-bar'
])
    .run(function ($rootScope, $location, $window, $http, $state, Auth, Principal) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            // if (Principal.isIdentityResolved()) {
            //     Auth.authorize();
            // }


            // Update the language
            // Language.getCurrent().then(function (language) {
            //     $translate.use(language);
            // });

        });

        $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
            if (toState.name != 'login' && $rootScope.previousStateName) {
                $rootScope.previousStateName = fromState.name;
                $rootScope.previousStateParams = fromParams;
            }
        });

        $rootScope.back = function() {
            // If previous state is 'activate' or do not exist go to 'home'
            if ($rootScope.previousStateName === 'activate' || $state.get($rootScope.previousStateName) === null) {
                $state.go('store');
            } else {
                $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
            }
        };
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        //$urlRouterProvider.otherwise('');
        $stateProvider.state('store', {
            abstract: true,
            url: '/'
        });

    });
