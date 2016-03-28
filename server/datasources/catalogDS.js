'use strict';

var request = require('request');
var dataSources = {};

module.exports = dataSources

   
dataSources.processServiceRequest = function(cb){
    var host = 'localhost';
    var port = '9898';
    var service = '/api/catalogs';
    var apiUrl = 'http://'+host+':'+port+service;
    return cb.apply(this,[apiUrl]);
};

dataSources.getActiveCatalogByCountry = function(countryCode,headers,cb){
    return this.processServiceRequest(function(apiUrl,err){
        if(!err){
            var url = apiUrl+'/active/'+countryCode;
            if(headers && headers !== null){
                request.get({url:url,headers:headers,json:true},cb);
            }else{
                request.get({url:url,json:true},cb);
            }
        }else{
            cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
    });
};
