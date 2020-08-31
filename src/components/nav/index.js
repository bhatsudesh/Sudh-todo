import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

export default function Nav({ handleInput, handleAddToDo }) {

    function scrollTop() {
        scroll.scrollToTop()
    }

    return (
        <header className="fixed top-0 w-full flex flex-wrap items-center text-blue-500 lg:py-4 py-3 lg:text-gray-800 bg-gray-200 lg:px-48 px-3 shadow-lg shadow-sm">
            <form className="flex-1 flex justify-between items-center">
                <div className="font-bold lg:text-lg text-base hover:text-blue-600 cursor-pointer lg:pr-24 mr-4 sm:mr-10" onClick={() => {
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
                        onChange={handleInput}
                    />
                </div>
                <div className="lg:px-3 px-2">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white lg:text-sm text-xs uppercase font-semibold py-1 text-center lg:px-5 px-3 rounded-full"
                        onClick={handleAddToDo}>
                        Add
                    </button>
                </div>
            </form>
        </header >
    )
}
