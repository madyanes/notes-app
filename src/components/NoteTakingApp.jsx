import React from 'react'
import { getInitialData, showFormattedDate } from '../utils'
import Header from './Header'
import NewNote from './NewNoteInput'
import Navigation from './Navigation'
import AllNotes from './AllNotes'

import '../assets/css/style.css'

class NoteTakingApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived
                return note
            }
            return note
        })
        this.setState({ notes })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <NewNote />
                    <Navigation />
                    <AllNotes
                        notes={this.state.notes}
                        showFormattedDate={showFormattedDate}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default NoteTakingApp
