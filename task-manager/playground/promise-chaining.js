require('../src/db/mongoose')
const User = require('../src/models/user')

// 5cac0414bfa5bd6289d47c50

User.findByIdAndUpdate('5cac046ffe47986295b86e67', {age: 1}).then((user)=>{
  console.log(user)
  return User.countDocuments({age: 1})
}).then((result)=>{
  console.log(result);
}).catch((e)=>{
  console.log(e);
})

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments( { age })
  return count
}

updateAgeAndCount('5cac046ffe47986295b86e67', 2).then((count)=>{
  console.log(count);
}).catch((e)=>{
  console.log(e);
})

