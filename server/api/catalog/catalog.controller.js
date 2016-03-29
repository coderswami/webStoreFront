/**
 * Module for the controller definition of the catalog api.
 * The CatalogController is handling /api/catalogs requests.
 * @module {catalog:controller~CatalogController} catalog:controller
 * @requires {@link ParamController}
 */
'use strict';

var CatalogAPI = require('../../datasources/catalogDS');

module.exports = CatalogController;

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
function CatalogController(router) {
    //ParamController.call(this, Catalog,  router);

    // modify select only properties
    // this.select = ['-__v'];

    // omit properties on update
    // this.omit = ['hashedPassword'];

    // property to return (maybe a virtual getter of the model)
    // this.defaultReturn = 'profile';
}

// define properties for the CatalogController here
CatalogController.prototype = {

    /**
     * Set our own constructor property for instanceof checks
     * @private
     */
    constructor: CatalogController,

    index : function(req,res){
        console.log('In index method');
    },

    getActiveCatalog : function(req,res){
        var countryCode = req.params.countryCode;
        CatalogAPI.getActiveCatalogByCountry(countryCode,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    getCategories : function(req,res){
        var catalogId = req.params.id;
        CatalogAPI.getCategoriesByCatalog(catalogId,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    getProducts : function(req,res){
        var categoryId = req.params.categoryId;
        console.log(req.params);
        CatalogAPI.getProductsByCategory(categoryId,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    }

};

// inherit from ParamController
//CatalogController.prototype = Object.create(ParamController.prototype);

