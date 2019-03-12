const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
  handler: (argv)=>{
    notes.addNote(argv.title,argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv)=>{
    notes.removeNote(argv.title);
  }
})

// List command
yargs.command({
  command: 'list',
  describe: 'Creates a list',
  handler: ()=> notes.listNotes()
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv)=> notes.readNote(argv.title)
})


// NECESSARY 
yargs.parse()

