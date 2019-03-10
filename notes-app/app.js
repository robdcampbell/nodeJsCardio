const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')


// add, remove, read, list 

// Create add command
yargs.command({
  command: 'add',
  describe: 'Adding a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (args)=>{
    console.log(`Title: ${args.title}`)
    console.log(`Title: ${args.body}`)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: ()=>console.log('Removing note...')
})

// List command
yargs.command({
  command: 'list',
  describe: 'Creates a list',
  handler: ()=>console.log('Making a list')
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: ()=>console.log('Reading some notes')
})


// NECESSARY 
yargs.parse()
//console.log(yargs.argv)

// yargs.command({
//   command: 'add',
//   describe: 'Adding a new note',
//   builder: {
//     title: {
//       describe: 'Note Title',
//       demandOption: true,
//       type: 'string'
//     },
//     body: {
//       describe: 'Note Body',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (argv)=>{
//     console.log(`Title: ${argv.title}`)
//     console.log(`Body: ${argv.body}`)
//   }
// })