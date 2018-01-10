const { mongoose } = require('./../server/db/mongoose')
const { ObjectID } = require('mongodb')

const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user');



// Todo.c({}).then((result) => {
//     console.log(result)
// })

Todo.findOneAndRemove({ _id : '5a55616e77b5dc9bc2ea9861'}).then((todo) => {
    console.log(todo)
})


// Todo.findByIdAndRemove('5a5560e7e9b07c99778bb5f6').then((todo) => {
//     console.log(todo)
// })

