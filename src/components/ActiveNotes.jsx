import React from 'react'
import ActiveNoteItems from './ActiveNoteItems'

const ActiveNotes = ({ notes, showFormattedDate }) => {
    return (
        <section className="active-notes">
            {
                notes.map((note) => (
                    <ActiveNoteItems key={note.id} note={note} showFormattedDate={showFormattedDate} />
                ))
            }
        </section>
    )
}

export default ActiveNotes
