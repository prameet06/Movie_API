const express = require('express');
const path = require('path');
const hbs = require('hbs');
const movie = require('./utils/movie');
const app = express();
const port = process.env.PORT || 3000;

//Defining path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Set up handlesbars engine and views location

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index');
})
app.get('/movie', (req, res) => {
    res.render('result');
})
app.get('/result', (req, res) => {
    if (!req.query.name) {
        res.send({
            error: 'You must provide name'
        })
    } else {
        movie(req.query.name, (error, { title, year, rated, runtime, actors, plot, poster, imdbR, rottenR }) => {
            if (error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                title: title,
                year: year,
                rated: rated,
                runtime: runtime,
                actors: actors,
                plot: plot,
                poster: poster,
                imdbR: imdbR,
                rottenR: rottenR

            })
        })

    }

})


app.listen(port, () => {
    console.log('Server is up on port' + port);
});