//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)

app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

//Serves static files (we need it to import a css file and an image)
app.use(express.static('public'));
app.use(express.static('public/img'));


app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

app.get('/main', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

app.get('/random', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('random', {layout : 'index'});
});

app.get('/tokyo', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('tokyo', {layout : 'index'});
});

app.use((req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('404page');
});



app.listen(port, () => console.log(`App listening to port ${port}`));






