var superagent = require('superagent');
var expect = require('expect.js');
var users = require('../models/users/users.js');
var costumers = require('../models/costumers/costumers.js');
var countries = require('../models/countries/countries.js');


describe('Testing api and multiget module', function() {

  it('has res equal to countries table in db', function() {
    superagent.get('http://localhost:3000/api/countries')
       .end(function(res) {
           expect(res).to.eql(countries.get());
       });
 
  });

  it('has res equal to users table in db', function() {
    superagent.get('http://localhost:3000/api/users')
       .end(function(res) {
           expect(res).to.eql(users.get());
       });
  });

  it('has res equal to costumers table in db', function() {
    superagent.get('http://localhost:3000/api/costumers')
       .end(function(res) {
           expect(res).to.eql(costumers.get());
       });
  });

  it('has res equal to costumer with id 1 in costumers table in db', function() {
    superagent.get('http://localhost:3000/api/costumer/1')
       .end(function(res) {
           expect(res).to.eql(costumers.get(1));
       });
  });

  it('has res equal to user with id 2 in users table in db', function() {
    superagent.get('http://localhost:3000/api/user/2')
       .end(function(res) {
           expect(res).to.eql(users.get(2));
       });
  });

  it('has res equal to country with id 3 in countries table in db', function() {
    superagent.get('http://localhost:3000/api/country/3')
       .end(function(res) {
           expect(res).to.eql(countries.get(3));
       });
  });
  
  it('has res equal to variable multi', function() {
    superagent.get('http://localhost:3000/api/multi?users=api/users&costumer=api/costumer/2&countries=api/countries')
       .end(function(res) {
           expect(res.status).to.eql(200);
       });
  });

});