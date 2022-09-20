import React, {useState, useEffect} from 'react'

import axios from 'axios';

import NotesList from './components/NotesList';
import Navbar from "./components/Navbar"

const App = () => {
  const API_URL = 'https://challenge.leadjet.io/blablabla/notes'

  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    axios.get(API_URL)
         .then((response) => {
            const result = response.data
            setAllNotes(result)
        })
        .catch((err) => {
          alert(err.message)
        })
  }, [])

  const addNote = (notes) => {
    const newNotes = [...allNotes, notes]
    setAllNotes(newNotes)
  }

  const editNote = (id, body) => {
    let updatedNotes = allNotes.map((note) => (note.id === id ? { ...note, body} : note))
    setAllNotes(updatedNotes)
  }

  return(
    <div class="notes-container">
      <Navbar addNote = {addNote} />
      <NotesList allNotes = {allNotes} editNote = {editNote} />
    </div>
  )
}

export default App;