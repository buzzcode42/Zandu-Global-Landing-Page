import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <header className="fixed-nav navbar">
            <nav className="relative z-50 h-24 select-none bg-white" x-data="{ showMenu: false }">
                <div className="fixed flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">

                    <div class="flex items-center justify-start w-1/4 h-full pr-4">
                        <a href="#_" className="inline-block py-4 md:py-0">
                            <span className="p-1 text-xl font-black leading-none text-gray-900">Zandu Global.</span>
                        </a>
                    </div>

                    <div className="fixed top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-10 md:relative md:flex">
                        <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                            <a href="#_" className="items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span class="text-indigo-600">.</span></a>
                            <ul className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-4 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                    
                                    <li>
                                        <a href="/"><Link onClick={handleClose} activeClass="active" to="hero" offset={-100} spy={true} smooth={true} duration="500" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Home</Link></a>
                                    </li>

                                    <li>
                                        <a href="/Manifesto"><Link onClick={handleClose} activeClass="active" to="manifesto" offset={-10} spy={true} smooth={true} duration="500" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Manifesto</Link></a>
                                    </li>

                                    <li>
                                        <a href="/Values"><Link onClick={handleClose} activeClass="active" to="values" offset={0} spy={true} smooth={true} duration="500" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Values</Link></a>
                                    </li>

                                    <li>
                                        <a href="/About"><Link onClick={handleClose} activeClass="active" to="about" offset={-10} spy={true} smooth={true} duration="500" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">About</Link></a>
                                    </li>

                                    <li>
                                        <a href="/Faq"><Link onClick={handleClose} activeClass="active" to="faq" offset={-100} spy={true} smooth={true} duration="500" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">FAQ</Link></a>
                                    </li>
                                </ul>
                            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                <a href="www.zanduglobal.com" className="w-full pxinline-flex items-center px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Sign Up for Early Access</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                        <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
