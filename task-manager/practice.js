const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1.27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client)=>{
  const db  = client.db(databaseName);

  // INSERTING  : Create

  // db.collection('users').insertOne({
      //   name:'Vikram',
      //   age: '26'
      // }, (error, result) => {
      //     if(error){
      //       return console.log('Unable to insert user');
      //     }

      //     console.log(result.ops)
      // })
    
      // db.collection('users').insertMany([
      //   {
      //     name: 'Jen',
      //     age: 28
      //   },
      //   {
      //     name: 'Gunther',
      //     age: 26
      //   }
      // ], (error, result)=>{
      //   if(error){
      //     return console.log('Unable to insert documents!')
      //   }

      //   console.log(result.ops);
      // })

    // db.collection('tasks').insertMany([
    //   {
    //     description: 'Buy groceries',
    //     completed: true
    //   },
    //   {
    //     description:  'Make marathon playlist',
    //     completed: false
    //   },
    //   {
    //     description: 'Finish portfolio site',
    //     completed: false
    //   }
    // ], (error,result)=>{
    //   if(error){
    //     return console.log('Unable to add tasks!')
    //   }

    //   console.log(result.ops)
    //  })




})