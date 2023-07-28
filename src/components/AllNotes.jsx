import React from 'react'
import ActiveNotes from './ActiveNotes'
import ArchivedNotes from './ArchivedNotes'

const AllNotes = ({ notes, showFormattedDate, onDelete, onArchive }) => {
    return (
        <>
            <ActiveNotes
                notes={notes}
                showFormattedDate={showFormattedDate}
                onDelete={onDelete}
                onArchive={onArchive}
            />
            <ArchivedNotes
                notes={notes}
                showFormattedDate={showFormattedDate}
                onDelete={onDelete}
            />
        </>
    )
}

export default AllNotes
