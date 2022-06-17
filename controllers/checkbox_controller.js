//requiring the collection
const todolist = require('../model/todolist');

// creating the checkbox controller function to handle deletion of the tasks
module.exports.checkbox = function (req, res) {
    console.log(req.body);

    // if a single task is selected for the deletion then it will be of the type string, otherwise an array of strings
    if (typeof (req.body.checkbox) == "string") {
        todolist.findByIdAndDelete(req.body.checkbox, (err, item) => {
            if (err) {
                console.log("cannot delete from database", err);
                return;
            }
            //Displaying the deleted item
            console.log("Deleted ", item);

        });
        res.redirect('back');
        return;
    }
    //the delete_tasks is an array of _id's of tasks to be deleted
    const delete_tasks = req.body.checkbox;

    //Iterating over tasks and deleting them one by one
    for (let i in delete_tasks) {
        todolist.findByIdAndRemove(delete_tasks[i], (err, item) => {
            if (err) {
                console.log("Cannot delete from the database ", err);
                return;
            }
            console.log("Deleted ", item);
        });
    }
    //redirecting the page back to home
    res.redirect('back');
}