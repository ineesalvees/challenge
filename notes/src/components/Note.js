import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios'

import EditNote from './EditNote';

const Note = (props) => {
    const API_URL = 'https://challenge.leadjet.io/blablabla/notes'
    const { id, body, editNote} = props

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (body) => {
        axios.put(API_URL+`/${props.id}`, body)
            .then((response) => {
                const result = response.data
                editNote(result.id, result.body)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return(
        <div class="note">
            <span>{body}</span>
            <div class="note-footer">
                <Button 
                    class="button-edit"
                    onClick={handleShow} 
                    startIcon={<ModeEditIcon/>}
                />
            </div>
            <Dialog open={show} onClose={handleClose}>
                <EditNote 
                    key={id}
                    text={body}
                    handleUpdate={handleUpdate}
                    handleClose={handleClose}
                />
            </Dialog>
        </div>
    )

}
export default Note