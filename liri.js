require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var command = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function runLiri(command, userSearch) {
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

function getBandsInTown(artist) {
    var artist = userSearch;
    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL).then(
        function (response) {
            console.log("===================");
            // console.log(response);
            console.log("Name of the Venue " + response.data[0].venue.name + "\r\n");
            console.log("Venue location " + response.data[0].venue.city + "\r\n");
            console.log("Date of event " + moment(response.date[0].datetime).format("MM-DD-YYYY") + "\r\n");

            var logConcert = "=====Concert Log Entry=====" + "\nName of the musician " + artist + "\nName of the venue " + venue + "\nName of city " + city + "\nDate of event " + date

            fs.appendFile("log.txt", logConcert, function (err) {
                if (err) throw err;
            });
        });
};

function getOMB(movie) {
    // console.log("Movie " + movie);

    if (!movie) {
        movie = "Mr. Nobody";
    }
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=shot&apikey=trilogy";
    // console.log(movieQueryUrl);

    axios.get(movieQueryUrl).then(
        function (response) {
            // console.log(response.data);

            console.log("==================");
            console.log("Title: " + response.data.Title + "\r\n");
            console.log("Year Released: " + response.data.Year + "\r\n");
            console.log("IMDB Rating: " + response.data.imdbRating + "\r\n");
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
            console.log("Country Where Produced: " + response.data.Country + "\r\n");
            console.log("Language: " + response.data.Language + "\r\n");
            console.log("Plot: " + response.data.Plot + "\r\n");
            console.log("Actors: " + response.data.Actors + "\r\n");

            var logMovie = "====Movie Log Entry====" + "\nMovie title: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMDB rating: " + response.data.imdbRating + "\nRotten Tomatoes rating: " + response.data.Ratings[1].Value + "\Country of production: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors;

            fs.appendFile("log.txt", logMovie, function (err){
                if (err) throw (err);
            });
        });
};

runLiri(command, userSearch);