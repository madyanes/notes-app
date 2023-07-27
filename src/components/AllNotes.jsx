import React from 'react'
import ActiveNotes from './ActiveNotes'

const AllNotes = ({ notes, showFormattedDate }) => {
    return (
        <>
            <ActiveNotes notes={notes} showFormattedDate={showFormattedDate} />
        </>
    )
}

export default AllNotes
