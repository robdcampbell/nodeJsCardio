const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// USERS

app.post('/users', async (req,res)=>{
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
})

app.get('/users', async (req,res)=>{
 
  try {
    const users = await User.find({});
    res.send(users);
  } catch(e) {
    res.status(500).send();
  }

 

});

  app.get('/users/:id', async (req,res)=> {
    
    const _id = req.params.id;

    try {
      const user = await User.findById(_id);
      
      if(!user) {
        return res.status(404).send()
      }

      res.send(user)
    } catch (e) {
      res.status(500).send();
    }

  })

  app.patch('/users/:id', async (req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age'];
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation) {
      return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, 
        { new: true, runValidators: true});

        if(!user){
          return res.status(404).send()
        }

        res.send(user);
    } catch (e) {
      res.status(400).send(e)
    }
  })

// TASKS

app.post('/tasks', async (req,res)=>{
  const task = new Task(req.body);

  try {
    await task.save()
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e)
  }
  
      // task.save().then(()=>{
      //   res.status(201).send(task);
      // }).catch((e)=>{
      //   res.status(400).send(e)
      // })

})

app.get('/tasks',async (req,res)=>{
 
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }
 
      //  Task.find({ }).then((tasks)=>{
      //   res.send(tasks);
      // }).catch((e)=>{
      //   res.status(500).send();
      // })
});

  app.get('/tasks/:id', async (req,res)=> {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if(!task){
      return res.status(404).send();
    }

    return res.send(task);  
  } catch (e) {
    res.status(500).send()
  }
    
    //   if(!task){
    //     return res.status(404).send();
    //   }

    //   res.send(task);

    // }).catch((e)=>{
    //   res.status(500).send();
    // })
  })

  app.patch('/tasks/:id', async (req,res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description','completed'];
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));
  
    if(!isValidOperation){
      return res.status(400).send({ error: 'Invalid Updates' });
    }

    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, 
        { new: true, runValidators: true});

        if(!task){
          return res.status(404).send()
        }

        res.send(task);
    } catch (e) {
      res.status(400).send(e);
    }
  
  }) // Task patch


// // 

app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`)
})