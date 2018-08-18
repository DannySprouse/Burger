// Set node dependencies

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all routes and set up logic within those routes where required
router.get('/', function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  burger.all(function(burger_data) {
      res.render('index', { burger_data });
  });
});

router.post('/burgers/create', function(req, res) {
  if (req.body.burger_name == '') {
      console.log('Please enter a burger name');
      res.redirect('/');
  } else {
      burger.create(req.body.burger_name, function(result) {
          console.log(result);
          res.redirect('/');
      });
    }
});

router.post('/burgers/update', function(req, res) {
  burger.update(req.body.burger_id, function(result) {
      console.log(result);
      res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
