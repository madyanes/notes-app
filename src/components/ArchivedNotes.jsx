import React, { Component } from 'react'
import ArchivedNoteItems from './ArchivedNoteItems'

class ArchivedNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            archivedNotes: []
        }
    }

    componentDidMount() {
        this.filterArchivedNotes()
    }

    filterArchivedNotes = () => {
        const { notes } = this.props
        const archivedNotes = notes.filter((note) => note.archived)
        this.setState({ archivedNotes })
    }

    render() {
        const { notes, showFormattedDate, onDelete, onArchive } = this.props;
        const archivedNotes = notes.filter((note) => note.archived === true);

        return (
            <section className='notes'>
                <h1>Archived Notes</h1>
                <div className="active-notes">
                    {
                        archivedNotes.length ? (
                            archivedNotes.map((note) => (
                                <ArchivedNoteItems
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
        );
    }
}

export default ArchivedNotes
