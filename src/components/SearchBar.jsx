import React from 'react'

const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-notes">
            <input
                type="text"
                placeholder='Cari catatan ...'
                onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}

export default SearchBar
