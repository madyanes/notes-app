import React from 'react'
import { getInitialData } from '../utils'

class NoteTakingApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
        }
    }

    render() { }
}

export default NoteTakingApp
