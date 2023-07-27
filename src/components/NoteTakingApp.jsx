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
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id)
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
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default NoteTakingApp
