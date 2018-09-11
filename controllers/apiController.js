let Todos = require('../models/todoModel');
let bodyParser = require('body-parser');

module.exports = function(app) {
//To process POST transactions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/todos/:uname', function(req, res){
        console.log(req.params.uname);
        Todos.find({ username: req.params.uname}, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    app.get('/api/todo/:id', function(req,res) {
        Todos.findById({_id: req.params.id}, function(err, todo)
        {
            if (err) throw err;
            res.send(todo);

        });
    });
    app.post('/api/todo', function(req,res){

        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if (err) throw err;
                res.send('Success');
            });
        }
        else {
            console.log(req.body.todo);
            console.log(req.body.isDone);
            console.log(req.body.hasAttachment);

            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                res.send('Success');
            });

            app.delete('/api/todo', function(req, res){
                Todos.findByIdAndRemove(req.body.id, function(err) {
                    if (err) throw err;
                    res.send('Success');
                });
            });
        }

    });
}