//Although we are requring express in multiple files, but it's instance is created only once and the same instance is used in all the files
const express = require('express');

//requiring the express router library for handling all the routes via this file
const router = express.Router();

console.log('router loaded');

// requring all the controller functions for different routes

const homeController = require('../controllers/home_controller')
const addTodolist = require('../controllers/add-todolist');
const checkboxController = require('../controllers/checkbox_controller')


//Handling user requests
router.get('/', homeController.home);
router.post('/add-todolist', addTodolist.addList);

router.post('/checkbox-input', checkboxController.checkbox);


//router should be made exportable
module.exports = router;