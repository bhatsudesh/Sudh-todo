import React, { useState, useEffect } from 'react'

import ToDo from '../todo/index'
import Nav from '../nav'

const ToDoContainer = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchToDos();
    }, [])

    const addToLocalStorage = (todo) => {
        let ToDos = localStorage.getItem('ToDos');
        ToDos = JSON.parse(ToDos || "[]");

        ToDos.unshift(todo);
        localStorage.setItem('ToDos', JSON.stringify(ToDos));
    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    
    const triggerToDo = (e) => {
        fetchToDos();
    }

    const handleAddToDo = (e) => {
        if(inputValue != '') {
            addToLocalStorage(inputValue);
            setInputValue('');
            fetchToDos();
        } else {
            
        }
    }

    const fetchToDos = () => {
        let ToDos = localStorage.getItem('ToDos');
        ToDos = JSON.parse(ToDos || "[]");
        setTasks(ToDos)
    }

    return (
        <>
            < Nav
                handleInput={handleInput}
                handleAddToDo={handleAddToDo} />
            <section className="lg:px-48 px-3 lg:pt-32 pt-20">
                <h2 className="font-bold lg:text-xl text-xl pl-1 text-gray-800 tracking-tight mb-2 mt-5">
                    My ToDo's
                </h2>
                <hr />
            </section>

            <div className="mt-4 grid sm:grid-cols-3 md:grid-cols-4 gap-10 lg:px-48 px-3 md:px-12 py-2">
                {
                    tasks.map((task, index) => (
                        <ToDo
                            key={index}
                            task={task}
                            taskIndex={index}
                            triggerToDo={triggerToDo}
                            />
                    ))
                }
            </div>
        </>
    )
}

export default ToDoContainer