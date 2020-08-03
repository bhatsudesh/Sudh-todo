import React from 'react'

export default function ToDo(props) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
            <img src="https://picsum.photos/400/200" alt="random" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.task}</div>
                <p className="text-gray-700 text-base">
                    {new Date().toISOString().slice(0, 10)}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#HaveGoodDay</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ToDos</span>
            </div>
        </div>
    )
}
