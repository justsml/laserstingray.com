var express = require('express');
var app = module.exports = express();

var Rest = require('./lib');
var Blog = require('../../db/blog');
var User = require('../../db/user');

//
//generic rest handler for application paths (using here, because we're not going to need authkeys)
//

function stateAuthentication(req, res, next) {
  if (req.canPlayRoleOf('apiUser')) {
    return next();
  } else {
    return res.status(401).send({'error': 'user not authorized for this type of role', 'status': 401});
  }
}

var blog = new Rest({
  model: Blog,
  preware: stateAuthentication
}, app);

var user = new Rest({
  model: User,
  preware: stateAuthentication
}, app);
