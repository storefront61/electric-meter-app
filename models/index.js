var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/electric-meter-app',{useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Item = require("./item");