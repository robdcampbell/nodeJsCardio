const doWork = async ()=>{
  throw new Error('Something went wrong')
  return 'Andrew'
}

// console.log(doWork())

doWork().then((result)=>{
  console.log(`result: ${result}`)
}).catch((e)=>{
  console.log(`e: ${e}`)
});