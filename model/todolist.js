// Adding mongoose library to create schema
const mongoose = require('mongoose');

// The following schema is followed for each document in the collection
const todolistSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

//Defining the schema
const todolist = mongoose.model('todolist', todolistSchema);


//the 'todolist' has to be made exportable
module.exports = todolist;