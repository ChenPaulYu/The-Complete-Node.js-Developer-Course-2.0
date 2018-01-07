var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var {ObjectID} = require('mongodb')



var app = express();


app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text : req.body.text
    })

    todo.save().then( (docs) => {
        res.send(docs)
    }, (e) => {
        res.status(400).send(e);
    })

})

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos/:id' , (req,res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)){
        return status(404).send()
    }
    Todo.findById(id).then((todos) => {
        return res.send({ todos })
    }).catch((e) => {
        return res.status(400).send()
    })
})


app.listen(3000,() => {
    console.log('Started on port 3000');
})

// var newTodo = new Todo({
//     text : 'Cook dinner'
// })

// newTodo.save().then( (docs) => {
//     console.log('save to do ' , docs)
// })

// newTodo.save().then( (docs) => {
//     console.log('save to do ', docs)`
// },(e) => {
//     console.log('Unable to save todo')
// })


// var newUser = new User({
//     email : "bernie40916@gmail.com"
// })

// var otherTodo = new Todo({
//     tect : 'watch video',
//     completed : true,
//     completedAt : 1900
// })

// otherTodo.save().then((docs) => {
//     console.log(JSON.stringify(docs , undefined , 2))
// }, (e) => {
//     console.log('Unable to save todo ', e)
// })

module.exports = { app }