# liri-node-app
This application was designed for the fullstack coding bootcamp at UNCC.

## Overview

The Liri Node App makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information), but it could very easily be adapted to include any number of others by simply adding more searchType options in the switchcase and adding corresponding functions below.

This app is designed to make reviewing your search information extremely easy by logging your searches in your console, and additionally logging them in a log.txt document, with each new command giving line breaks for easy readability. The app also has built in functionality for reading outside documents (currently just a simple .txt file) and running searches based on their contents. It also has an additional command option "change," which can be used to rewrite the .txt file, so you can run searches from it as well.

### spotify-this-song
The spotify-this command uses the spotify API to search for a song provided by the user. The liri app will return the artist, the song name, a preview link to the song, and the album.

![spotify-this-song](https://user-images.githubusercontent.com/51647427/62007874-9cd84600-b120-11e9-8671-86b370b4e6fb.gif)

### concert-this
The concert-this command uses the Bandsintown API to search for a band provided by the user. The liri app will return the band or artist name, the venue name, the venue location, and the date of the event.

![concert-this](https://user-images.githubusercontent.com/51647427/62007915-4fa8a400-b121-11e9-9df2-c8ce9ad96bb9.gif)

### movie-this
The movie-this command uses the OMDB API to search for a movie provided by the user. The liri app will return the title of movie, the release year, the IMDB rating, Rotten Tomatoes rating, country of production, language, plot, and actors in movie.

![movie-this](https://user-images.githubusercontent.com/51647427/62007918-53d4c180-b121-11e9-8ac3-2e3d4d33728e.gif)

### do-what-it-says
The do-what-it-says command will read from the random.txt file, then uses spotify-this-song by default to search for the song "I Want it That Way".

![do-what-it-says](https://user-images.githubusercontent.com/51647427/62007919-57684880-b121-11e9-87fa-44b34dd0e269.gif)

### log.txt
The liri app keeps a log of the results that were displayed.

<img width="790" alt="Screen Shot 2019-07-28 at 8 28 40 AM" src="https://user-images.githubusercontent.com/51647427/62007053-f8053b00-b116-11e9-9a2a-7d3c971e4563.png">
<img width="794" alt="Screen Shot 2019-07-28 at 8 28 53 AM" src="https://user-images.githubusercontent.com/51647427/62007055-f9366800-b116-11e9-8711-614b76388ecb.png">

