import React, { useState } from 'react'

import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const EditNote = (props) => {

    const {handleUpdate, handleClose } = props

    const [body, setBody] = useState('')

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body
        }
        handleUpdate(formData)
        setBody('')
        handleClose()
    }

    return(
        <div className="note add" >
            
            <form onSubmit = {handleSubmit}>
                <TextareaAutosize
                    placeholder="Insert your note here" 
                    value={body}
                    onChange={handleBodyChange}
                />
                
                <div className="note-footer">
                    <Button class="save-note" variant="text" type = 'submit' onClick={handleSubmit}>Save</Button>
                </div>
                
            </form>
        </div>
    )

}

export default EditNote