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

  // db.collection('users').findOne({_id: new ObjectID("5ca109a62810793e77941fe5")}, (error, user)=> {
  //   if(error){
  //     return console.log('Unable to fetch');
  //   }

  //   console.log(user);
  // })

  // db.collection('users').find({ age: 26 }).toArray((error,users) => {
  //   console.log(users);
  // })
  // db.collection('users').find({ age: 26 }).toArray((error,count) => {
  //   console.log(count);
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("5ca0fab0de7ddd3d78e6bef1") }, (error,task) =>{
    console.log('printing task');
  })
      
})