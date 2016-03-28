'use strict';

var request = require('request');
var consul = require('consul')({host:'consul'});
var dataSources = {};

module.exports = dataSources


dataSources.processServiceRequest = function(cb){
    var host = 'localhost';
    var port = '9898';
    var apiHost = 'http://'+host+':'+port;
    return cb.apply(this,[apiHost]);
};


   
   dataSources.getAllProducts = function(version,productSearchCriteriaDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/products';
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:productSearchCriteriaDTO},cb);
            }else{
              request.post({url:url,json:true,body:productSearchCriteriaDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.getProductById = function(version,productId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/product/'+productId;
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
   
   dataSources.suggestedTerms = function(version,queryString,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/suggestedterms?queryString='+queryString;
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
   
   dataSources.saveProduct = function(version,productDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveproduct';
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:productDTO},cb);
            }else{
              request.post({url:url,json:true,body:productDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.saveProductAttribute = function(version,productId,productAttributeDetailDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveproductattribute/'+productId;
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:productAttributeDetailDTO},cb);
            }else{
              request.post({url:url,json:true,body:productAttributeDetailDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.saveProductOptionAttribute = function(version,productOptionId,productAttributeDetailDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveproductoptionattribute/'+productOptionId;
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:productAttributeDetailDTO},cb);
            }else{
              request.post({url:url,json:true,body:productAttributeDetailDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.saveProductImage = function(version,productOptionId,imageDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveproductimage/'+productOptionId;
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:imageDTO},cb);
            }else{
              request.post({url:url,json:true,body:imageDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.getProductPriceById = function(version,priceId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/price/'+priceId;
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
   
   dataSources.getProductPricesByProductOption = function(version,productOptionId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/price/productoption/'+productOptionId;
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
   
   dataSources.getAllPriceRules = function(version,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/pricerules';
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
   
   dataSources.getPriceRuleById = function(version,priceRulesId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/pricerule/'+priceRulesId;
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
   
   dataSources.getPriceRulesByProductOption = function(version,productOptionId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/pricerule/productoption/'+productOptionId;
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
   
   dataSources.getPriceRulesBySupplier = function(version,supplierId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/pricerule/supplier/'+supplierId;
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
   
   dataSources.saveProductPrice = function(version,productOptionId,newProductPriceDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveproductprice/'+productOptionId;
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:newProductPriceDTO},cb);
            }else{
              request.post({url:url,json:true,body:newProductPriceDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.savePriceRule = function(version,newPriceRulesDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/savepricerule';
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:newPriceRulesDTO},cb);
            }else{
              request.post({url:url,json:true,body:newPriceRulesDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProductPrice = function(version,priceId,productPriceDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deleteproductprice/'+priceId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true,body:productPriceDTO},cb);
            }else{
              request.del({url:url,json:true,body:productPriceDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deletePriceRule = function(version,priceRulesId,priceRulesDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deletepricerule/'+priceRulesId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true,body:priceRulesDTO},cb);
            }else{
              request.del({url:url,json:true,body:priceRulesDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProduct = function(version,productId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deleteproduct/'+productId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true},cb);
            }else{
              request.del({url:url,json:true},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProductAttribute = function(version,productId,valueId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deleteproductattribute/'+productId+'?valueId='+valueId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true},cb);
            }else{
              request.del({url:url,json:true},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProductOptionAttribute = function(version,productOptionId,valueId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deleteproductoptionattribute/'+productOptionId+'?valueId='+valueId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true},cb);
            }else{
              request.del({url:url,json:true},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.getProductOption = function(version,productOptionId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/productoption/'+productOptionId;
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
   
   dataSources.saveProductOption = function(version,productId,productOptionDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/saveProductOption/'+productId;
            if(headers && headers !== null){
               request.post({url:url,headers:headers,json:true,body:productOptionDTO},cb);
            }else{
              request.post({url:url,json:true,body:productOptionDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProductOption = function(version,productId,ProductOptionIdDTO,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/deleteProductOption/'+productId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true,body:ProductOptionIdDTO},cb);
            }else{
              request.del({url:url,json:true,body:ProductOptionIdDTO},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.getOptionImageList = function(version,productOptionId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/productimages/'+productOptionId;
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
   
   dataSources.deleteAllProductImages = function(version,productOptionId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/clearallproductimages/'+productOptionId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true},cb);
            }else{
              request.del({url:url,json:true},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };
   
   dataSources.deleteProductImage = function(version,productOptionId,imageId,headers,cb){
     return this.processServiceRequest(function(apiHost,err){
        if(!err){
            var url = apiHost+'/api/products/'+version+'/clearimage/'+productOptionId+'/'+imageId;
            if(headers && headers !== null){
               request.del({url:url,headers:headers,json:true},cb);
            }else{
              request.del({url:url,json:true},cb);
            }
        }else{
             cb.apply(this,[null,null,{errorCode:err,errorMessage:'Service Not Found'}]);
        }
     });
    
   };

   
  