import React from 'react';

export default function Hero() {
    return (
        <div id="hero">
            <div className="container max-w-lg px-4 py-28 mx-auto mt-px text-left md:max-w-none md:text-center">
                
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Democratizing Investment</span> <span class="relative inline-block mt-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500">Allocation</span></h1>
                <div className="max-w-lg mx-auto mt-6 text-sm text-center text-gray-500 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Zandu Global is a platform where SMEs around the world will be able to enlist and raise capital to accelerate development in their respective communities. Think of it as a New York Stock Exchange (NYSE) for SMEs</div>
                <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full border-radius-4 border-2 border-indigo-400">
                    <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none" />
                    <span className="relative top-0 right-0 block">
                        <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
                            Sign Up
                        </button>
                    </span>
                </div>
            </div>

        </div>
    );
}
