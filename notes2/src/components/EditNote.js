import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';


const EditNote = ({ id, handleEditNote, handleClose, title, text }) => {

    const [noteTitle, setNoteTitle] = useState(title)
    const [noteText, setNoteText] = useState(text)

    const handleSubmit = (event) => {
        event.preventDefault();

        handleEditNote(id, noteTitle, noteText)
        handleClose()
    }

    
    return (
        <div className='note add' onSubmit={handleSubmit}>
            <div className='note-header'>
                <TextareaAutosize
                    placeholder='Insert a title'
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                />
                <AiOutlineCloseCircle onClick={handleClose} className='close-icon'/>
            </div>
                <TextareaAutosize style={{ height: '250px' }}
                    onChange={(e) => setNoteText(e.target.value)}
                    defaultValue={noteText}
                />
            <div className="note-footer">
                <small>add</small>
                <Button class="save-note" variant="text" onClick={(e) => handleSubmit(e)}>Save</Button>
            </div>
        </div>
    )
}

export default EditNote;