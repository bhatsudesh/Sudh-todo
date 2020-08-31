import React from 'react'
import ReactDOM from 'react-dom'

import ToDoContainer from './components/todoContainer/index.js'

const App = () =>{
    return (
        <div className="font-sans w-full h-screen">
            <ToDoContainer />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))