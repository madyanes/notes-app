import React from 'react'

const ActiveNoteItems = ({ note, showFormattedDate, onDelete }) => {
    return (
        <article>
            <div className='note-item-container'>
                <h1>{note.title}</h1>
                <p className='date'>{showFormattedDate(note.createdAt)}</p>
                <p>{note.body}</p>
            </div>
            <div className="note-item-actions">
                <button>Arsipkan</button>
                <button onClick={() => onDelete(note.id)}>Hapus</button>
            </div>
        </article>
    )
}

export default ActiveNoteItems
