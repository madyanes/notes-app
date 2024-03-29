import React from 'react'

class NewNote extends React.Component {
    state = {
        title: '',
        content: '',
    }

    onChangeInputTitle = (e) => {
        const inputTitle = e.target.value
        if (inputTitle.length <= 50) {
            this.setState({ title: inputTitle })
        }
    }

    onChangeInputContent = (e) => {
        const inputContent = e.target.value
        this.setState({ content: inputContent })
    }

    onSubmitNoteHandler = (e) => {
        e.preventDefault();
        const { title, content } = this.state
        this.props.onAddNoteHandler({ title, content })
        this.setState({ title: '', content: '' })
    }

    render() {
        return (
            <section className='new-note'>
                <h1>Catatan Baru</h1>
                <form action="#" onSubmit={this.onSubmitNoteHandler}>
                    <div className="character-count">
                        <p>Sisa Karakter: {50 - this.state.title.length}</p>
                    </div>
                    <input type="text"
                        placeholder='Judul catatan'
                        value={this.state.title}
                        maxLength={50}
                        onChange={this.onChangeInputTitle}
                        required
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder='Isi catatan'
                        value={this.state.content}
                        onChange={this.onChangeInputContent}
                        required
                    ></textarea>
                    <button>Buat</button>
                </form>
            </section>
        )
    }
}

export default NewNote
