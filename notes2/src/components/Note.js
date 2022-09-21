import React, { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNote from './EditNote';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Note = ({id, title, text, date, handleEditNote, handleDeleteNote}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="note">
            <h1>{title}</h1>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small> 
                <Button 
                    class="button-edit"
                    onClick={handleShow} 
                    startIcon={<ModeEditIcon/>}
                />
                <DeleteForeverIcon className="delete-icon" onClick={() => handleDeleteNote(id)} />
            </div>

            <Dialog open={show} onClose={handleClose}>
                <EditNote 
                    id={id}
                    title={title}
                    text={text}
                    handleEditNote={handleEditNote} 
                    handleDeleteNote={handleDeleteNote}
                    handleClose={handleClose}
                />
            </Dialog>
        </div>
    )
}

export default Note;