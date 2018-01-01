// const MongoClient = require('mongodb').MongoClient;

const { MongoClient , ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // findOneUpdate

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5a4a85f33c49b6cb8a9a4811')
    }, {
        $set : {
            completed : false
        },
        $inc : {
            age : 1
        }
    }, {
        returnOriginal : false 
    }).then((result) => {
        console.log(result)
    })


    client.close();
});