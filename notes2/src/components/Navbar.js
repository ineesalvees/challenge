import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import AddNote from './AddNote'

const Navbar = ({handleAddNewNote}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <AddNote 
                    handleAddNewNote={handleAddNewNote} 
                    handleClose={handleClose}
                />
            </Dialog>
        </div>

    )
}

export default Navbar