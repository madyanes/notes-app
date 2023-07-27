import React from 'react'
import { getInitialData } from '../utils'
import Header from './Header'
import NewNote from './NewNoteInput'
import Navigation from './Navigation'

import '../assets/css/style.css'

class NoteTakingApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <NewNote />
                    <Navigation />
                </main>
            </React.Fragment>
        )
    }
}

export default NoteTakingApp
