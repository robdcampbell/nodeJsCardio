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

const deleteTaskAndCount = async (id) => {
  const task = await Task.findOneAndDelete(id);
  const count = await Task.countDocuments({id});
  return count
}


deleteTaskAndCount('5cad6abddd1654698e12a799').then((count)=>{
  console.log(count);
}).catch((e)=>{
  console.log(e);
})