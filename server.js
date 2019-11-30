'use strict';

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const superagent = require('superagent');
const pg =require('pg');

const PORT = process.env.PORT;

const app = express();

app.use(cors());
const client = new pg.Client(process.env.DATABASE_URL); 
client.on('error', err => console.error(err));



app.get('/location', locationinfo);

app.get('/weather', weatherinfo);

app.get('/events', eventinfo);

app.get('/movies', moviesinfo);

server.get('/yelp', yelpinfo);


// Location
function locationinfo(request, response) {
  const city = request.query.data;
  

 location.getlocation(city)
    .then(data => sendJson(data, response))
    .catch((error) => errorHandler(error, request, Response));
};

// Weather
function weatherinfo(request, response) {
  const location = request.query.data;

 weather(location)
    .then(summaries => sendJson(summaries, response))
    .catch((error) => errorHandler(error, request, Response));
};

// Event
function eventinfo(request, response) {
  const location = request.query.data;

 events(location)
    .then(eventslist => sendJson(eventslist, response))
    .catch((error) => errorHandler(error, request, Response));
};

//  movies 
function moviesinfo(request, response) {
  const location = request.query.data;

 movies(location)
    .then(list => sendJson(list, response))
    .catch((error) => errorHandler(error, request, Response));
};
// yelp
function yelpinfo(request, response) {
  const location = request.query.data;

 yelp(location)
    .then(reviews => sendJson(reviews, response))
    .catch((error) => errorHandler(error, request, Response));
};

// Error
function errorHandler(error, req, Response) {
    Response.status(500).send(error);
  }



client.connect()
.then( () =>{
    app.listen(PORT, () => console.log(`App Listening on ${PORT}`));
    })
    .catch (err => console.error(err));

