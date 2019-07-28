# liri-node-app
This application was designed for the fullstack coding bootcamp at UNCC.

## Overview

Liri is an application that uses Node.js to take a command and user input to return results from various API's.

### spotify-this-song
The spotify-this command uses the spotify API to search for a song provided by the user. The liri app will return the artist, the song name, a preview link to the song, and the album.

### concert-this
The concert-this command uses the Bandsintown API to search for a band provided by the user. The liri app will return the band or artist name, the venue name, the venue location, and the date of the event.

### movie-this
The movie-this command uses the OMDB API to search for a movie provided by the user. The liri app will return the title of movie, the release year, the IMDB rating, Rotten Tomatoes rating, country of production, language, plot, and actors in movie.

### do-what-it-says
The do-what-it-says command will read from the random.txt file, then uses spotify-this-song by default to search for the song "I Want it That Way".

### log.txt
The liri app keeps a log of the results that were displayed.
