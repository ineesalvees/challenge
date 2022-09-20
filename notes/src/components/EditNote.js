import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const EditNote = (props) => {
    const {text, handleUpdate, handleClose } = props

    const [body, setBody] = useState('')

    // Auto-Save
    useEffect(() => {
        const timeoutId = setTimeout(() => console.log(`I can see you're not typing. I can use "${body}" now!`), 1000);
        return () => clearTimeout(timeoutId);
      }, [body]);

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
        <div class="note add" >
            <TextareaAutosize
                defaultValue={text}
                value={body}
                onChange={handleBodyChange}
            /> 
            
            <div class="note-footer">
                <Button class="save-note" variant="text" type = 'submit' onClick={handleSubmit}>Save</Button>
            </div>
        </div>

        
    )

}

export default EditNote