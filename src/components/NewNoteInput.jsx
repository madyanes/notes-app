import React from 'react'

class NewNote extends React.Component {
    render() {
        return (
            <section className='new-note'>
                <h1>Catatan Baru</h1>
                <form action="#">
                    <input type="text" placeholder='Judul catatan' />
                    <textarea cols="30" rows="10" placeholder='Isi catatan'></textarea>
                    <button>Buat</button>
                </form>
            </section>
        )
    }
}

export default NewNote
