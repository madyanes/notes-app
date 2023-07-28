import React, { useState } from 'react'

class NewNote extends React.Component {
    state = {
        text: ''
    }

    onChangeInput = (e) => {
        const inputText = e.target.value
        if (inputText.length <= 50) {
            this.setState({ text: inputText })
        }
    }

    render() {
        return (
            <section className='new-note'>
                <h1>Catatan Baru</h1>
                <form action="#">
                    <div className="character-count">
                        <p>Sisa Karakter: {50 - this.state.text.length}</p>
                    </div>
                    <input type="text"
                        placeholder='Judul catatan'
                        maxLength={50}
                        onChange={this.onChangeInput}
                    />
                    <textarea cols="30" rows="10" placeholder='Isi catatan'></textarea>
                    <button>Buat</button>
                </form>
            </section>
        )
    }
}

export default NewNote
