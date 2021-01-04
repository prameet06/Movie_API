const request = require('request');
const movie = (name, callback) => {
    const url = `http://www.omdbapi.com/?apikey=6fc12cbc&t=${encodeURIComponent(name)};`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to services`, undefined);
        } else if (body.error) {
            callback('Unable to find movie', undefined)
        } else {
            callback(undefined, {
                title: body.Title,
                year: body.Year,
                rated: body.Rated,
                runtime: body.Runtime,
                actors: body.Actors,
                plot: body.Plot,
                poster: body.Poster,
                imdbR: body.Ratings[0].Value,
                rottenR: body.Ratings[1].Value
            })
        }
    })
}