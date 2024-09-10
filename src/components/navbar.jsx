
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-gray-200 shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://ayykori.net/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="favicon.ico" className="h-8" alt="Ayykori Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-emerald-300">Ayykori Tasks</span>
                </a>
                <button 
                    type="button" 
                    className="inline-flex justify-center items-center p-2 w-10 h-10 rounded-lg md:hidden hover:shadow text-emerald-300 hover:bg-emerald-100" 
                    onClick={toggleNavbar}
                    aria-controls="navbar-default" 
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div 
                    className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} 
                    id="navbar-default"
                >
                    <ul className={`font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row gap-4 md:mt-0 md:border-0 bg-white`}>
                        <li>
                            <a href="#" className="text-emerald-300 hover:text-emerald-400">Layout Builder</a>
                        </li>
                        <li>
                            <a href="#" className="text-emerald-300 hover:text-emerald-400">Tile Interaction</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
