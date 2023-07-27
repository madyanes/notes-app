import React from 'react'
import ActiveNotes from './ActiveNotes'
import ArchivedNotes from './ArchivedNotes'

const AllNotes = ({ notes, showFormattedDate }) => {
    return (
        <>
            <ActiveNotes notes={notes} showFormattedDate={showFormattedDate} />
            <ArchivedNotes notes={notes} showFormattedDate={showFormattedDate} />
        </>
    )
}

export default AllNotes
