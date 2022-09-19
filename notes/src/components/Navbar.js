import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import axios from 'axios'
import NotesForm from './NotesForm'

const Navbar = (props) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const API_URL = 'https://challenge.leadjet.io/example123/notes'

    const { addNote } = props

    const formSubmission = (formData) => {

        axios.post(API_URL, formData)
        .then((response) => {
            const result = response.data
            console.log(result)
            addNote(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div class="navbar">
            <div class="navbar-header">
                <h1>Notes</h1>
                <Button 
                    class="button-add"
                    onClick={handleShow} 
                    startIcon={<AddCircleOutlinedIcon style={{fontSize: '40px'}}/>}
                />
            </div>

            <Dialog open={show} onClose={handleClose}>
                <div className = 'note add'>
                    <h2> New Note </h2>
                    <NotesForm formSubmission = {formSubmission}/>
                </div>
            </Dialog>
        </div>
    )
}

export default Navbar