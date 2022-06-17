//mongoose is our ODM for the MongoDB

//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection to check if it is successfull

const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the database'));

//up and running, then print the message

db.once('open', () => {
    console.log('successfully connected to the database');
});

