const todolist = require('../model/todolist');

//The addList controller function is used to take data of the task from the user (via form ) and feed it to the database
module.exports.addList = function (req, res) {
    console.log(req.body);
    //Creating a document with all the required fields
    todolist.create({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    }, function (err, newItem) {
        if (err) {
            console.log("Cannot enter data into the database", err);
        }
        else {
            console.log("****", newItem);
        }
    });
    todolist.find({}, (err, todolist) => {
        if (err) {
            console.log("Cannot fetch data from the database ", err);
            return;
        }
        //redirecting back to home
        res.redirect('back');

    });
};