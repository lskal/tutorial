import React from "react"
import ReactDOM from 'react-dom/client'

const Greeting = () => {
    return React.createElement('h2', {}, 'hello world');
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)