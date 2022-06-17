const todolist = require('../model/todolist');

//The home controller function will  render the home.ejs file with the spcified values of rotateAngle of the plus button and the animateType of the input section

module.exports.home = function (req, res) {

    todolist.find({}, (err, todolist) => {
        if (err) {
            console.log("Cannot fetch data from the database ", err);
            return;
        }
        //rendering the home page in response
        res.render('home', {
            rotateAngle: "rotate-135deg",
            animateType: "animate-enter",
            todolist
        });
    });

};