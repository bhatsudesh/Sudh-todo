import React, {useState} from 'react'
import AddToDo from '../addToDo/index'
import ToDo from '../todo/index'

const ToDoContainer = () => {
    const [tasks, setTasks] = useState([])

    return (
        <>
        <section className="lg:px-48 px-3 lg:pt-32 pt-20">
        <AddToDo addToDo={ (task) =>{
                tasks.push(task)
                setTasks([...tasks])
            } } />
            <h2 className="font-bold lg:text-xl text-2xl pl-1 text-gray-800 tracking-tight mb-2 mt-5">
                My ToDo's
            </h2>
            <hr />
        </section>
        <div className="flex lg:px-48 px-3">
        <div className="lg:flex-grow">
        {
         tasks.map((task, index) => (
            <ToDo key={ index } task={ task } taskIndex={ index } />
        ))
        }
        </div>
    </div>
    </>
    )
}

export default ToDoContainer