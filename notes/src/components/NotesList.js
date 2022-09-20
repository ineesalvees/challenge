import React from 'react'

import Note from './Note'

const NotesList = (props) => {
    const { allNotes, editNote } = props

    return(
        <div class="notes-list">
            {allNotes.length === 0 ? (
                <div class='no-notes'>
                    <h2> No notes found 😣 </h2>
                    <p> Click on the ➕ button to create a new note 😊 </p>
                </div>
            ) : allNotes.map((notes) => (
                <Note 
                    key = {notes.id}
                    editNote = {editNote}
                    {...notes}
                />
            ))}
        </div>
    )

}
export default NotesList