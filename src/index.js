import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './components/nav'
import ToDoContainer from './components/todoContainer/index.js'

const App = () =>{
    return (
        <div className="font-sans w-full h-screen bg-gray-100">
                <Nav />
                <ToDoContainer />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))