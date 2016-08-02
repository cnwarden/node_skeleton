
"use strict";

const PORT = 3001;

var express = require('express');
var async = require("async");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.listen(PORT, function () {
	console.log("app server started:" + PORT);
});

