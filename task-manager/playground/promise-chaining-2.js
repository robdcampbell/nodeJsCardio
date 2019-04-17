require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5cad6a30f827556977a28a7b').then((task)=>{
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((result)=>{
  console.log(result)
}).catch((e)=>{
  console.log(e);
})

