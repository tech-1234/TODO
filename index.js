const express = require('express');
const app = express();
const port = 8000;
const ejs = require('ejs');

//connecting to the database
const db = require('./config/mongoose');

const todolist = require('./model/todolist');

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
// Setting up the view engine - ejs

app.set('view engine', 'ejs');
app.set('views', './views');

//We wil be storing the asset files such as css and js in the assets folder



//for redirecting every route to index.js in the routes folder

app.use('/', require('./routes'));

//server will listen to the specified port
app.listen(port, (err) => {
    if (err) {
        console.log(`There is an error running the server at port ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});