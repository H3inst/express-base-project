// Imports
const express = require('express');

// Init
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({extended: false}));

// Routing
app.use(require('./routes/main-routes'));

// Static
app.use(express.static(__dirname + '/public'));

// Export
module.exports = app;