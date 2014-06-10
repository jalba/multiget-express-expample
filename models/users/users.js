var db = require('../../db/db.js');
var users = db.find('users');

module.exports = {

    get: function(id) {
        if(!id) {
     	    return users;
        }else {
            for(var i = 0; i < users.length; i++) {
                if(users[i].id === id) {
                    return users[i];
                }
            }          
        }
    }
};	