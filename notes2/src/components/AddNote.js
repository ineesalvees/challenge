import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';


const AddNote = ({ handleAddNewNote, handleClose }) => {

    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('')

    const handleNewText = (event) => {
        setNoteText(event.target.value)
    }

    const handleNewTitle = (event) => {
        setNoteTitle(event.target.value)
    }

    const handleSaveNote = () => {
        if(noteText.length > 0 || noteTitle.length > 0) {
            handleAddNewNote(noteTitle, noteText)
            setNoteTitle('')
            setNoteText('')
            handleClose()
        }
        else {
            handleClose()
            console.log('ERROR: Cannot save note')
        }
    }
    
    return (
        <div className="note add">
            <div className="note-header">
                <TextareaAutosize
                    placeholder='Insert a title'
                    value={noteTitle}
                    onChange={handleNewTitle}
                    style={{ width: 200 }}
                />
                <AiOutlineCloseCircle onClick={handleClose} className='close-icon'/> 
            </div>

            <TextareaAutosize
                placeholder="Insert your note here" 
                value={noteText}
                onChange={handleNewText}
            />

            <div className="note-footer">
                <small>add</small>
                <Button class="save-note" variant="text" onClick={handleSaveNote}>Save</Button>
            </div>
        </div>
    )
}

export default AddNote;