import React from 'react'
import axios from 'axios';

import Note from './Note'


const NotesList = (props) => {

    const { allNotes, updateNote } = props

    const getNote = (id) => {
        console.log('>>>>>>< ', id)
        axios.get(`https://challenge.leadjet.io/example123/notes/${id}`)
         .then((response) => {
            const result = response.data

            console.log('UMA NOTA: ', result)
        })
    }

    return(
        <div class="notes-list">
            {allNotes.length === 0 ? (
                <div>
                    <h2> No notes found :( </h2>
                    <p> Click on the 'plus' button to create a new note :) </p>
                </div>
            ) : allNotes.map((notes) => (
                <Note 
                    key={notes.id}
                    updateNote={updateNote}
                    {...notes}
                />
            ))}
        </div>
    )

}
export default NotesList