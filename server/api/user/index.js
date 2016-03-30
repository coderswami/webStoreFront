/**
 * Module for handling catalog requests.
 * Initializing the [CatalogController]{@link catalog:controller~CatalogController}
 * and configuring the express router to handle the catalog api
 * for /api/catalogs routes. All Routes are registered after the
 * [request parameters]{@link catalog:parameters} have been
 * added to the router instance.
 * Exports the configured express router for the catalog api routes
 * @module {express.Router} catalog
 * @requires {@link module:middleware}
 * @requires {@link catalog:controller~CatalogController}
 */
'use strict';

var router = require('express').Router();
var contextService = require('request-context');
var middleware = require('../../lib/middleware');
var UserController = require('./user.controller');
//var auth = require('../../lib/auth/auth.service');

// Export the configured express router for the catalog api routes
module.exports = router;

/**
 * The api controller
 * @type {catalog:controller~UserController}
 */
var controller = new UserController(router);

// register catalog route parameters, uncomment if needed
// var registerCatalogParameters = require('./catalog.params');
// registerCatalogParameters(router);

// register catalog routes
router.route('/')
    .get(controller.index);

router.route('/:id')
    .get(controller.getUserProfile);

router.route('/address')
    .put(controller.saveUserAddress);
