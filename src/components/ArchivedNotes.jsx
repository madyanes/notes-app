import React from 'react'
import ArchivedNoteItems from './ArchivedNoteItems'

const ArchivedNotes = ({ notes, showFormattedDate }) => {
    return (
        <section className='notes'>
            <h1>Archived Notes</h1>
            <div className="active-notes">
                {
                    notes
                        .filter((note) => note.archived === true)
                        .map((note) => (
                            <ArchivedNoteItems key={note.id} note={note} showFormattedDate={showFormattedDate} />
                        ))
                }
            </div>
        </section>
    )
}

export default ArchivedNotes
