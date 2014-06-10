var db = require('../../db/db.js');
var costumers = db.find('costumers');

module.exports = {

    get: function(id) {
        if(!id) {
     	    return costumers;
        }else {
            for(var i = 0; i < costumers.length; i++) {
                if(costumers[i].id === id) {
                    return costumers[i];
                }
            }          
        }
    }
};