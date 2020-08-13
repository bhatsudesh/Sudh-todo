import React from 'react'

export default function ToDo(props) {

    return (
        <div className="lg:px-4 md:px-4 px-2 py-2">
        <div className="rounded overflow-hidden shadow-lg bg-gray-100">
            <img src="https://picsum.photos/250/150" alt="random" className="rounded pl-3"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.task}</div>
                <div className="flex justify-between text-gray-700 text-base">
                <p className="">
                    {new Date().toLocaleString().slice(0,8)}
                </p>
                <p>
                    {new Date().toLocaleString().slice(12,17)}
                </p>
                </div>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-900 rounded-full text-xs font-semibold mr-2">#HaveGoodDay</span>
                <span className="inline-block bg-gray-400 rounded-full text-xs font-semibold mr-2">#Enjoy</span>
            </div>
        </div>
        </div>
    )
}
