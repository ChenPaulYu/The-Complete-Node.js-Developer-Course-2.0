// const MongoClient = require('mongodb').MongoClient;

const { MongoClient , ObjectID} = require('mongodb')




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    
    console.log('Connected to MongoDB server')

    const db = client.db('TodoApp')
    
    // Insert

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert ',err)
    //     }

    //     // ops => all the result
    //     console.log(JSON.stringify(result.ops))

    // })

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age : 25,
    //     location : 'Taipei'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert ', err)
    //     }

    //     console.log(result.ops[0]._id)
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    // Find => object

    // db.collection('Todos').find({
    //         _id: new ObjectID('5a4949eee401ec154cf8827e')
    //     }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,1))
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err)
    // })

    // Find => count

     db.collection('Todos').count({completed : false}).then((count) => {
        console.log(`Todos count : ${count} `)
    }, (err) => {
        console.log('Unable to fetch todos ', err)
    })

    client.close();
});