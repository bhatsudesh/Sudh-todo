import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import ToDo from '../todo/index'

const ToDoContainer = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    function scrollTop() {
        scroll.scrollToTop()
    }

    useEffect(() => {
        fetchToDos();
    },[])

    const addToLocalStorage = (todo) => {
        let ToDos = localStorage.getItem('ToDos');
        ToDos = JSON.parse(ToDos || "[]");
        
        ToDos.unshift(todo);
        localStorage.setItem('ToDos', JSON.stringify(ToDos));
    }

    const fetchToDos = () => {
        let ToDos = localStorage.getItem('ToDos');
        ToDos = JSON.parse(ToDos || "[]");
        console.log('called  fetch todos');
        setTasks(ToDos)
    }

    return (
        <>

            <header className="fixed top-0 w-full flex flex-wrap items-center text-blue-500 lg:py-4 py-3 lg:text-gray-800 bg-gray-200 lg:px-48 px-3 shadow-lg shadow-sm">
                <div className="flex-1 flex justify-between items-center">
                    <div className="font-bold lg:text-lg text-base hover:text-blue-600 cursor-pointer lg:pr-24 pr-10" onClick={() => {
                        scrollTop();
                    }
                    }> {/*logo*/}
                    SuperToDo
                </div>
                    <div className="flex-grow">
                        <input
                            type="text"
                            name="addTodo"
                            className="bg-white text-gray-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 lg:px-4 px-2 w-full appearance-none leading-normal"
                            placeholder="Add Todo"
                            required
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </div>
                    <div className="lg:px-3 px-2">
                        <button className="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white lg:text-sm text-xs uppercase font-semibold py-1 text-center lg:px-5 px-3 rounded-full"
                            onClick={() => {
                                addToLocalStorage(inputValue);
                                setInputValue('');
                                fetchToDos();
                            }}>Add</button>
                    </div>
                </div>
            </header >

            <section className="lg:px-48 px-3 lg:pt-32 pt-20">
                <h2 className="font-bold lg:text-xl text-xl pl-1 text-gray-800 tracking-tight mb-2 mt-5">
                    My ToDo's
            </h2>
                <hr />
            </section>

            <div className="flex flex-wrap mx-1 lg:mx-4 lg:px-48 px-3 md:px-12 py-2">
                {
                    tasks.map((task, index) => (
                        <ToDo key={index} task={task} taskIndex={index} />
                    ))
                }
            </div>
            {/* <Nav
                addToDo={(task) => {
                    tasks.push(task)
                    setTasks([...tasks])
                }} />
            <section className="lg:px-48 px-3 lg:pt-32 pt-20">
                <h2 className="font-bold lg:text-xl text-xl pl-1 text-gray-800 tracking-tight mb-2 mt-5">
                    My ToDo's
            </h2>
                <hr />
            </section>
            <div className="flex flex-wrap -mx-1 lg:-mx-4 lg:px-48 px-3 md:px-12">
                {
                    tasks.map((task, index) => (
                        <ToDo key={index} task={task} taskIndex={index} />
                    ))
                }
            </div> */}
        </>
    )
}

export default ToDoContainer