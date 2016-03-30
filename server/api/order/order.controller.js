/**
 * Module for the controller definition of the catalog api.
 * The CatalogController is handling /api/catalogs requests.
 * @module {catalog:controller~CatalogController} catalog:controller
 * @requires {@link ParamController}
 */
'use strict';

var OrderAPI = require('../../datasources/orderDS');
var async = require('async');

module.exports = OrderController;

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
function OrderController(router) {
    //ParamController.call(this, Catalog,  router);

    // modify select only properties
    // this.select = ['-__v'];

    // omit properties on update
    // this.omit = ['hashedPassword'];

    // property to return (maybe a virtual getter of the model)
    // this.defaultReturn = 'profile';
}

// define properties for the CatalogController here
OrderController.prototype = {

    /**
     * Set our own constructor property for instanceof checks
     * @private
     */
    constructor: OrderController,

    index : function(req,res){
        console.log('In index method');
    },

    getCartOrder : function(req,res){
        var cookie = req.params.cookie;
        async.waterfall([
            function(callback){
                OrderAPI.getCartOrder(cookie,null,function(err, response, body){
                    console.log(body);
                    callback(null, body);
                });
            },
            function(order, callback){
                if(order != undefined || order != null) {
                    OrderAPI.getOrderItemsByOrder(order.id, null, function (err, response, body) {
                        console.log(body);
                        order.items = body;
                        callback(null, order);
                    });
                }else {
                    callback(null, order);
                }
            }
        ], function(err, results){
            if (err) console.error(err.message);
            console.log(results);
            res.json(results);
        });
    },

    createOrder: function(req,res){
        OrderAPI.createOrder(req.body,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    saveOrderItem: function(req,res){
        OrderAPI.saveOrderItem(req.body,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    createPayment: function(req,res){
        var orderId = req.params.id;
        OrderAPI.createPayment(orderId,req.body,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    },

    createShipment: function(req,res){
        var orderId = req.params.id;
        OrderAPI.createShipment(orderId,req.body,null,function(err, response, body){
            console.log(body);
            res.json(body);
        });
    }
};

// inherit from ParamController
//CatalogController.prototype = Object.create(ParamController.prototype);

