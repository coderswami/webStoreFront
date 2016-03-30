/**
 * Module for the controller definition of the catalog api.
 * The CatalogController is handling /api/catalogs requests.
 * @module {catalog:controller~CatalogController} catalog:controller
 * @requires {@link ParamController}
 */
'use strict';

var UserAPI = require('../../datasources/userDS');
var async = require('async');

module.exports = UserController;

//var ParamController = require('../../lib/controllers/param.controller');

/**
 * The Catalog model instance
 * @type {catalog:model~Catalog}
 */
//var Catalog = require('./catalog.model').model;

/**
 * CatalogController constructor
 * @classdesc Controller that handles /api/catalogs route requests
 * for the catalog api.
 * Uses the 'catalogId' parameter and the 'catalogParam' request property
 * to operate with the [main catalog API Model]{@link catalog:model~Catalog} model.
 * @constructor
 * @inherits ParamController
 * @see catalog:model~Catalog
 */
function UserController(router) {
    //ParamController.call(this, Catalog,  router);

    // modify select only properties
    // this.select = ['-__v'];

    // omit properties on update
    // this.omit = ['hashedPassword'];

    // property to return (maybe a virtual getter of the model)
    // this.defaultReturn = 'profile';
}

// define properties for the CatalogController here
UserController.prototype = {

    /**
     * Set our own constructor property for instanceof checks
     * @private
     */
    constructor: UserController,

    index : function(req,res){
        console.log('In index method');
    },

    getUserProfile : function(req,res){
        var userId = req.params.id;
        UserAPI.getUserProfile(userId,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    saveUserAddress : function(req,res){
        UserAPI.saveUserAddress(req.body,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    }

};

// inherit from ParamController
//CatalogController.prototype = Object.create(ParamController.prototype);

