const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
  return 'Your notes...'
};

// ADD NOTE
const addNote = (title,body)=> {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note)=>{
      return note.title === title
  })

  if(duplicateNotes.length === 0){
      notes.push({
        title: title,
        body: body
      });
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added!'));
  } else {
     console.log(chalk.red.inverse('Note title taken!'));
  }
};

// REMOVE NOTE
const removeNote = (title)=>{
  const notes = loadNotes();
  const remainingNotes = notes.filter((note)=>{
    return note.title !== title
  })

  if(remainingNotes.length === notes.length){
      console.log(chalk.bgRed('No note found!'));
  } else {
    saveNotes(remainingNotes)
    console.log(chalk.bgGreen(`Note: ${title} removed!`));
  }
} // Remove Note


const saveNotes = (notes)=>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=> {
  try{
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
  } catch(err){
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};