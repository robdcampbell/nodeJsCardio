const fs = require('fs');
const chalk = require('chalk');

// ADD NOTE
const addNote = (title,body)=> {
  const notes = loadNotes();
  const duplicateNote = notes.find((note)=> note.title === note)
  
  if(!duplicateNote){
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

// List notes
const listNotes = ()=>{
  const notes = loadNotes(); 
  console.log(chalk.inverse("Your notes:")) 
  notes.forEach((note)=>{
    console.log(chalk.green.inverse(note.title));
  })
}

// Read Notes
const readNote = (title)=>{
  const notes = loadNotes();
  const readNote = notes.find((note)=> note.title === title)

  if(readNote){
    console.log(chalk.inverse(`${readNote.title}:`) + ' ' + readNote.body);
  } else {
     console.log(chalk.red.inverse('Not Found!'));
  }
}

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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};