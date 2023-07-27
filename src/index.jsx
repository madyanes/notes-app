import React from 'react'
import { createRoot } from 'react-dom/client'

class NoteTakingApp extends React.Component {
    render() {
        return <h1>Hai! Saya Madyan.</h1>
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<NoteTakingApp />)
