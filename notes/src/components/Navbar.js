import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import axios from 'axios'

import AddNote from './AddNote'

const Navbar = (props) =>{
    const API_URL = 'https://challenge.leadjet.io/inesalves/notes'
    const { addNote } = props

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = (noteData) => {
        axios.post(API_URL, noteData)
        .then((response) => {
            const result = response.data
            addNote(result)
        })
        .catch((err) => {
            alert('ERROR SUBMITTING NOTE: ', err.message)
        })
        handleClose()
    }

    return (
        <div class="navbar">
            <div class="navbar-header">
                <h1> Notes </h1>
                <Button 
                    class="button-add"
                    onClick={handleShow} 
                    startIcon={<AddCircleOutlinedIcon style={{fontSize: '40px'}}/>}
                />
            </div>

            <Dialog open={show} onClose={handleClose}>
                <div class='note add'>
                    <h2> New Note </h2>
                    <AddNote form = {form} />
                </div>
            </Dialog>
        </div>
    )
}

export default Navbar