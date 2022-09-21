import Note from './Note'

const NotesList = ({notes, handleEditNote, handleDeleteNote}) => {
    return (
        <div class="notes-list">
            {notes.map((note) => (
                <Note 
                    key={note.noteId}
                    id={note.noteId} 
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    handleEditNote={handleEditNote}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    )
}

export default NotesList;