import React, {useState} from 'react'


export default function AddToDo ({addToDo}) {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="fixed bottom-0 right-0 flex items-center pt-10 w-full lg:px-48 px-3 py-2">
            <div className="flex-grow">
                <input
                    type="text"
                    name="addTodo"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg lg:py-2 py-1 lg:px-4 px-2 w-full appearance-none leading-normal"
                    placeholder="Add Todo"
                    required
                    onChange ={e => setInputValue(e.target.value)}
                />
            </div>
            <div className="lg:px-5 px-2">
                <button className="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white lg:text-sm text-xs uppercase font-semibold py-2 text-center lg:px-5 px-3 rounded-full"
                onClick={() => {
                        addToDo(inputValue)
                        setInputValue('')
                }}>Add</button>
            </div>
        </div>
    )
}