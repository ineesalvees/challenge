import React, { useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const AddNote = (props) => {
    const { form } = props

    const [body, setBody] = useState('')

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const noteData = {
            body: body
        }
        form(noteData)
        setBody('')
    }
   
    return(
        <FormControl class="note add">
            <TextField 
                id="outlined-basic"
                label="Insert your note here" 
                variant="standard"
                value={body}
                onChange={handleBodyChange}
            />

            <div class="note-footer">
                <Button class="save-note" variant="text" type = 'submit' onClick={handleSubmit}> Save </Button>
            </div>
        </FormControl>
    )

}

export default AddNote