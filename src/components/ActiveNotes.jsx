import React, { Component } from 'react'
import ActiveNoteItems from './ActiveNoteItems'

class ActiveNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeNotes: []
        }
    }

    componentDidMount() {
        this.filterActiveNotes()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes !== this.props.notes) {
            this.filterActiveNotes()
        }
    }

    filterActiveNotes = () => {
        const { notes } = this.props
        const activeNotes = notes.filter((note) => !note.archived)
        this.setState({ activeNotes })
    }

    render() {
        const { showFormattedDate, onDelete, onArchive } = this.props
        const { activeNotes } = this.state

        return (
            <section className='notes'>
                <h1>Active Notes</h1>
                <div className="active-notes">
                    {
                        activeNotes.length ? (
                            activeNotes.map((note) => (
                                <ActiveNoteItems
                                    key={note.id}
                                    note={note}
                                    showFormattedDate={showFormattedDate}
                                    onDelete={onDelete}
                                    onArchive={onArchive}
                                />
                            ))
                        ) : (
                            <p>Tidak ada catatan.</p>
                        )
                    }
                </div>
            </section>
        )
    }
}

export default ActiveNotes
