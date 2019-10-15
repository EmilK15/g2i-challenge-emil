'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.render('index');
});

app.get('*', function(req, res) {
	res.redirect('/');
});

module.exports = app;