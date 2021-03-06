var path = require('path');

//
// App shared configs
//

var config = {
  title:     'LaserStingray',
  appName:   'LaserStingray',
  port:       3000,
  sessionId: 'lsid',
  views:      path.join(__dirname, '..'),
  public:     path.join(__dirname, '../..', 'assets', 'build'),
  secret:     process.env.NODE_SECRET || 'do_not_use_in_production!!',
  db:         process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/laserStingray',
  env:        process.env.NODE_ENV || 'development'
};

//
// User roles, bitwise so we can mash up roles
// together and verify authority
//

config.applicationRoles = {
  optin:        2,
  user:         4,
  apiUser:      16,
  contributor:  32,
  admin:        64
};

//
// Global variables for templates
//

var date = new Date();

config.templateVariables = {
  title:          config.title,
  appName:        config.appName,
  copyrightDate:  date.getFullYear()
};

//
// Data seeds for demoing, and easier initial wiring
//

config.seed = {
  admin: true,
  blog: true
};

module.exports = config;