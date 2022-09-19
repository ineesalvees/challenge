import React, { useState } from 'react';
import EditNote from './EditNote';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import axios from 'axios'

const Note = (props) => {

    const { id, body, updateNote} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (body) => {
        axios.put(`https://challenge.leadjet.io/example123/notes/${props.id}`, body)
            .then((response) => {
                const result = response.data
                updateNote(result.id, result.body)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return(
        <div className="note">
            {/* <h1>{title}</h1> */}
            <span>{body}</span>
            <div className="note-footer">
                <Button 
                    class="button-edit"
                    onClick={handleShow} 
                    startIcon={<ModeEditIcon/>}
                />
            </div>
            <Dialog open={show} onClose={handleClose}>
                <EditNote 
                    key={id}
                    handleUpdate={handleUpdate}
                    handleClose={handleClose}
                />
            </Dialog>
        </div>
    )

}
export default Note