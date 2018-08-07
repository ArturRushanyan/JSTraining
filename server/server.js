var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

var genres = [
    {
        id: 1,
        name: 'Rap'
    },
    {
        id: 2,
        name: 'Jazz'
    },
    {
        id: 3,
        name: 'Rock'
    }
]; 

app.get('/', function(req, res) {
    res.send('Hello API');
});

app.get('/genres', function(req, res) {
    res.send(genres);
});

app.get('/genres/:id', function(req,res) {
    console.log(req.params);
    var genre = genres.find(function(genre) {
        return genre.id === Number(req.params.id);
    });
    res.send(genre);
});

app.post('/genres', function(req, res) {
    var genre = {
        id: Date.now(),
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/genres/:id', function(req, res) {
    var genre = genres.find(function(genre) {
        return genre.id === Number(req.params.id);
    });
    genre.name = req.body.name;
    res.sendStatus(200); 
});

app.delete('/genres/:id', function(req, res) {
    genres = genres.filter(function (artist) {
        return genres.id !== Number(req.params.id);
    })
    res.sendStatus(200);
});


app.listen(3000, function () {
    console.log('Server is working');
});