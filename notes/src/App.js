import React, {useState, useEffect} from 'react'
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

import NotesList from './components/NotesList';
import Note from './components/Note';
import Navbar from "./components/Navbar"

const App = () => {
  const API_URL = 'https://challenge.leadjet.io/example123/notes'

  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    axios.get(API_URL)
         .then((response) => {
            const result = response.data

            console.log(result)
            setAllNotes(result)
        })
        .catch((err) => {
          alert(err.message)
        })
  }, [])

  const addNote = (notes) => {
    const result = [notes, ...allNotes]
    setAllNotes(result)
  }

  const updateNote = (id, body) => {
    let updatedNotes = allNotes.map((note) => (note.id === id ? { ...note, body} : note))
    setAllNotes(updatedNotes)
  }

  return(
    <div className="notes-container">
      <Navbar addNote={addNote}/>
      <NotesList allNotes = {allNotes} updateNote = {updateNote} />
    </div>
  )
}

export default App;