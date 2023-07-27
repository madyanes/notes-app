import React from 'react'
import ActiveNotes from './ActiveNotes'
import ArchivedNotes from './ArchivedNotes'

const AllNotes = ({ notes, showFormattedDate, onDelete }) => {
    return (
        <>
            <ActiveNotes notes={notes} showFormattedDate={showFormattedDate} onDelete={onDelete} />
            <ArchivedNotes notes={notes} showFormattedDate={showFormattedDate} />
        </>
    )
}

export default AllNotes
