import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {

    function scrollTop() {
        scroll.scrollToTop()
    }
    return (
        <header className="fixed top-0 lg:px-48 px-3 flex flex-wrap items-center shadow-lg lg:text-gray-800 text-blue-500 py-4 w-full bg-gray-200">
            <div className="flex-1 flex justify-between items-center">
                <div className="font-bold lg:text-lg text-base hover:text-blue-600 cursor-pointer" onClick={() => {
                    scrollTop();
                }
                }> {/*logo*/}
                    Super Todo
                </div>
                <div className="font-medium lg:text-base text-sm hover:text-blue-500 cursor-pointer" id="menu">
                    <Link to="education" className="cursor-pointer" smooth={true} duration={1000}>Sign in</Link>
                </div>
            </div>
        </header>
    )
}