const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('request');
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


app.listen(port, () => {
    console.log('Server is up on port' + port);
});