var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')


var Todo = mongoose.model('Todos',{
    text : {
        type : String,
        required: true,
        minlength : 1,
        trim : true // ignore space in the end or beginning
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
})

var newTodo = new Todo({
    text : 'Cook dinner'
})

newTodo.save().then( (docs) => {
    console.log('save to do ', docs)
},(e) => {
    console.log('Unable to save todo')
})

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