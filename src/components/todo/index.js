import React from 'react'

export default function ToDo({ task, taskIndex, triggerToDo }) {

    const deleteHandler = (index) => {
        let tasks = localStorage.getItem('ToDos');
        tasks = JSON.parse(tasks || "[]");
        tasks.splice(index, 1);
        localStorage.setItem('ToDos', JSON.stringify(tasks));
    }

    return (
        <div className="bg-gray-100 overflow-hidden shadow-md hover:shadow-lg rounded-lg m-2 w-auto">

            <img src="https://picsum.photos/250/150" alt="random" className="w-full h-48 sm:h-48 object-cover" />
            <div className="m-4">
                <div className="flex justify-between items-center">
                <span className="text-gray-800 text-xl sm:py-2 font-bold">{task}</span>
                <span
                className="bg-gray-300 cursor-pointer hover:bg-green-300 shadow hover:shadow-lg outline-none focus:outline-none rounded-full px-2 py-2"
                onClick={ () => {
                    deleteHandler(taskIndex);
                    triggerToDo();
                }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="badge-check w-6 h-6"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                </div>
                <div className="flex justify-between text-gray-700 text-base">
                    <div>{new Date().toLocaleString().slice(0, 8)}</div>
                    <div>{new Date().toLocaleString().slice(12, 17)}</div>
                </div>
                <div className="py-4">
                    <span className="inline-block rounded-full text-xs font-semibold">#HaveGoodDay</span>
                    <span className="inline-block rounded-full text-xs font-semibold m-2">#Enjoy</span>
                </div>
            </div>
        </div>
    )
}
