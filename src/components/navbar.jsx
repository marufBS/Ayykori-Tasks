import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-gray-200 shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <a target='_blank' href="https://ayykori.net/" rel="noopener noreferrer" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="favicon.ico" className="h-8" alt="Ayykori Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-400">AyyKori Tasks</span>
                </a>
                <button 
                    type="button" 
                    className="inline-flex justify-center items-center p-2 w-10 h-10 rounded-lg md:hidden hover:shadow text-emerald-300 hover:bg-emerald-100" 
                    onClick={toggleNavbar}
                    aria-controls="navbar-default" 
                    aria-expanded={isOpen}
                >
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
                            <Link className='text-emerald-400 hover:text-emerald-500 hover:shadow-lg shadow rounded py-2 px-5 transition-all duration-150 ease-in-out' to="/layout-builder">Layout Builder</Link>
                        </li>
                        <li>
                            <Link className='text-emerald-400 hover:text-emerald-500 hover:shadow-lg shadow rounded py-2 px-5 transition-all duration-150 ease-in-out' to="/tile-interaction">Tile Interaction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
