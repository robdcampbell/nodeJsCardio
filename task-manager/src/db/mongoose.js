const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if(!validator.isEmail(value)){
          throw new Error('Email is invalid')
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim:true,
      minLength: 7,
      validate(value){
        if(value.includes('password')){
          throw new Error('Cannot contain the word "Password"!')
        }
      }
    },  
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if(value < 0){
          throw new Error('Age must be a positive number')
        }
      }
    }
})

// const me = new User({
//   name: "   Rob    ",
//   email: "MYEMAIL@MEAD.IO",
//   password: "abc"
// });

// me.save().then((me)=>{
//   console.log(me);
// }).catch((error)=>{
// console.log('Error: ', error)
// });

const Task = mongoose.model('Task', { 
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const task1 = new Task({
  description: "        Take out the trash       "
})

task1.save().then((task1)=>{
  console.log(task1)
}).catch((error)=>{
  console.log(error)
});

 