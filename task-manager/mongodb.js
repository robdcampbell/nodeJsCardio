// // CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// Same using destructoring 
const { MongoClient, ObjectID } = require('mongodb');

const databaseName =  'task-manager';
const connectionURL= 'mongodb://127.0.0.1:27017';

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client)=>{
    if(error){
      return console.log('Unable to connect to database!')
    }
  
    const db = client.db(databaseName);

  // DELETE

  db.collection('tasks').deleteMany({
      description: 'Fix flat tire',
      completed: false
  }).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })

})