import React from 'react'

const ArchivedNoteItems = ({ note, showFormattedDate, onDelete, onArchive }) => {
    return (
        <article>
            <div className='note-item-container'>
                <h1>{note.title}</h1>
                <p className='date'>{showFormattedDate(note.createdAt)}</p>
                <p>{note.body}</p>
            </div>
            <div className="note-item-actions">
                <button onClick={() => onArchive(note.id)}>Batal Arsip</button>
                <button onClick={() => onDelete(note.id)}>Hapus</button>
            </div>
        </article>
    )
}

export default ArchivedNoteItems
