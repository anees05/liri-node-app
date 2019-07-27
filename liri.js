require("dotenv").config();

var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var command = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function runLiri(command, userSearch){
    switch (command) {
        case "spotify-this-song":
            getSpotify(userSearch);
        break;

        case "concert-this":
            getBandsInTown(userSearch);
        break;

        case "movie-this":
            getOMB(userSearch);
        break;

        case "do-what-it-says":
            getRandom();
        break;

        default: 
            console.log("Please enter a valid command");
        
    }
};

