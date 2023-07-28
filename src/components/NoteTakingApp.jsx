import React from 'react'
import { getInitialData, showFormattedDate } from '../utils'
import Header from './Header'
import NewNote from './NewNoteInput'
import SearchBar from './SearchBar'
import AllNotes from './AllNotes'
import Footer from './Footer'

import '../assets/css/style.css'

class NoteTakingApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            showedNotes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({ notes, showedNotes: notes })
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived
                return note
            }
            return note
        })
        this.setState({ notes, showedNotes: notes })
    }

    onSearch(text) {
        const { notes } = this.state
        if (text.trim() === '') {
            this.setState({ showedNotes: notes })
        } else {
            const filteredNotes = notes.filter((notes) => {
                return notes.title.toLowerCase().includes(text.toLowerCase())
            })
            this.setState({ showedNotes: filteredNotes })
        }
    }

    onAddNoteHandler = ({ title, content }) => {
        const newNote = {
            id: +new Date(),
            title: title,
            body: content,
            createdAt: new Date(),
            archived: false,
        }

        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
            showedNotes: [...prevState.showedNotes, newNote],
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <NewNote onAddNoteHandler={this.onAddNoteHandler} />
                    <SearchBar onSearch={this.onSearch} />
                    <AllNotes
                        notes={this.state.showedNotes}
                        showFormattedDate={showFormattedDate}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default NoteTakingApp
