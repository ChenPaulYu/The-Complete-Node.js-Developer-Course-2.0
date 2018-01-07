const { mongoose } = require('./../server/db/mongoose')
const { ObjectID } = require('mongodb')

const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user');



var id = "5a52386c90f62422dd3e813b"

if(!ObjectID.isValid(id)){
    console.log("Id is not valid !")
}else{
    Todo.find({
        _id: id
    }).then((todos) => {
        console.log('Todos', todos)
    })

    Todo.findOne({
        _id: id
    }).then((todos) => {
        console.log('Todos', todos)
    })

    Todo.findById({
        _id: id
    }).then((todos) => {
        console.log('Todos', todos)
    })
}

User.findById({
        _id: "5a494b4b029a491673637071"
    }).then((user) => {
        
    if(!user){
        return console.log('Unalbe to find user')
    }

    console.log(JSON.stringify(user,undefined,2))
})

