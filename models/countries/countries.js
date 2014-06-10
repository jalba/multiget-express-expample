var db = require('../../db/db.js');
var countries = db.find('countries');

module.exports = {

    get: function(id) {
        if(!id) {
     	    return countries;
        }else {
            for(var i = 0; i < countries.length; i++) {
                if(countries[i].id === id) {
                    return countries[i];
                }
            }          
        }
    }
};