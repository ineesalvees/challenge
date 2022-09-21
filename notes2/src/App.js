import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import NotesList from "./components/NotesList"
import Navbar from "./components/Navbar"

const App = () => {
  const [notes, setNotes] = useState(
    !localStorage.getItem('notes-app-data') 
    ? [
        {
        noteId: nanoid(),
        title: 'Title 1',
        text: 'This is my 1st note!',
        date: '30/07/2022'
        },
        {
          noteId: nanoid(),
          title: 'Title 2',
          text: 'This is my 2nd note!',
          date: '30/07/2022'
       }
      ] 
    : JSON.parse(localStorage.getItem('notes-app-data')))

  //1st time the app runs
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'))

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  //every time a new note is added
  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes])

  /** CRUD functions */
  const addNewNote = (title, text) => {
    const date = new Date();
    const newNote = {
      noteId: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }
    
    const addNote = [...notes, newNote]
    setNotes(addNote)
  }

  const editNote = (id, title, text) => {
    const newNotes = [...notes]
    const index = newNotes.findIndex(note => note.noteId === id)

    newNotes[index].title = title
    newNotes[index].text = text

    setNotes(newNotes)
  }

  const deleteNote = (noteId) => {
    const newArrayOfNotes = notes.filter((note) => note.noteId !== noteId)
    setNotes(newArrayOfNotes)
  }

  return (
    <div className="notes-container">
      <Navbar handleAddNewNote={addNewNote}/>
      <NotesList  
        notes={notes}
        handleEditNote={editNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  ) 
}

export default App;