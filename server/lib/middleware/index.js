/**
 * Module defining connect middleware to use in the materialAppNoAuthApp application.
 * @module {Object} middleware
 * @requires {@link responses}
 */
'use strict';

var _ = require('lodash');
var customResponses = require('../responses');

/**
 * The default error handler
 * Binds the handleError method of reponse to the request and response objects.
 * Passes the error to following handlers. The handleErrpr function will send the best
 * response available.
 *
 * @type {Function}
 * @param {Error|String} err - The error that occured during the request-response-cycle
 * @param {http.IncomingMessage} req - The request message object
 * @param {http.ServerResponse} res - The outgoing response object
 * @param {function} [next] - The next handler callback
 */
exports.defaultErrorHandler = function defaultErrorHandler(err, req, res, next) {
	console.error('defaultErrorHandler', req.originalUrl, res.statusCode, err);
	_.bind(customResponses.handleError, {res: res, req: req}, err);
	// pass the error to following handlers (if next if passed)
	if (next) {
		return next(err);
	}
};

/**
 * Extends the response with custom methods.
 *
 * Attach custom responses to `res` object,
 * provide access to `req` and `res` in their `this` context.
 * @param {http.IncomingMessage} req - The request message object
 * @param {http.ServerResponse} res - The outgoing response object
 * @param {function} next - The next handler callback
 */
exports.extendResponse = function extendResponse(req, res, next) {
	_.forEach(customResponses, function eachResponse(fn, name) {
		res[name] = _.bind(fn, {
			req: req,
			res: res
		});
	});
	return next();
};
