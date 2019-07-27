require("dotenv").config();

var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var command = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

