import React from 'react'
import ActiveNoteItems from './ActiveNoteItems'

const ActiveNotes = ({ notes, showFormattedDate }) => {
    return (
        <section className='notes'>
            <h1>Active Notes</h1>
            <div className="active-notes">
                {
                    notes
                        .filter((note) => note.archived === false)
                        .map((note) => (
                            <ActiveNoteItems key={note.id} note={note} showFormattedDate={showFormattedDate} />
                        ))
                }
            </div>
        </section>
    )
}

export default ActiveNotes
