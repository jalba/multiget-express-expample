var express = require('express')
, router = express.Router()
, countries = require('../models/countries/countries.js')
, users = require('../models/users/users.js')
, costumers = require('../models/costumers/costumers.js')
, multiget = require('multiget-express');

/* GET home page. */
router.get('/', function(req, res) {
  res.send('look for users, costumers or countries');
});

router.get('/countries', function(req, res) {
  res.send(countries.get());
});

router.get('/country/:id', function(req, res) {
  var id = parseInt(req.params.id);
  res.send(countries.get(id));
  
});

router.get('/users', function(req, res) {
  res.send(users.get());
});

router.get('/user/:id', function(req, res) {
  var id = parseInt(req.params.id);
  res.send(users.get(id));
  
});

router.get('/costumers', function(req, res) {
  res.send(costumers.get());
});

router.get('/costumer/:id', function(req, res) {
  var id = parseInt(req.params.id);
  res.send(costumers.get(id));
  
});

router.get('/multi', function(req, res) {
  var host = 'http://'+req.headers.host+'/';
  if(!req.query) {
  	res.send('No parameters provided')
  }else {
  	multiget(host, req.query, res);
  }
  
});



module.exports = router;
