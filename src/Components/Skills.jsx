import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt,FaReact } from "react-icons/fa";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri"
import { AnimateScreen } from 'animate-screen'


function Skills() {
  
  return (
    <div className='bg-zinc-800 p-10' id='skills'>
        <h1 className="text-orange-600 font-mono text-3xl font-bold m-4">Skills</h1>
        <ul className={`grid md:grid-cols-5  items-center justify-center mt-6`}
        >
            
            <li className='flex flex-col justify-center items-center text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 m-2 border-2 p-4 rounded-2xl shadow-orange-300 shadow-sm duration-700 hover:scale-105 ease-in-out'>
              <FaHtml5 className='text-7xl'/>
              <p className='text-white'>HTML</p>
            </li>
            <li className='flex flex-col justify-center items-center text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 m-2 border-2 p-4 rounded-2xl shadow-orange-300 shadow-sm duration-700 hover:scale-105 ease-in-out'>
              <FaCss3Alt className='text-7xl'/>
              <p className='text-white'>CSS</p>
            </li>
            <li className='flex flex-col justify-center items-center text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 m-2 border-2 p-4 rounded-2xl shadow-orange-300 shadow-sm duration-700 hover:scale-105 ease-in-out'>
              <RiTailwindCssFill className='text-7xl'/>
              <p className='text-white'>Tailwind Css</p>
            </li>
            <li className='flex flex-col justify-center items-center text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 m-2 border-2 p-4  rounded-2xl shadow-orange-300 shadow-sm duration-700 hover:scale-105 ease-in-out'>
              <RiJavascriptFill className='text-7xl'/>
              <p className='text-white'>JavaScript</p>
            </li>
            <li className='flex flex-col justify-center items-center text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 m-2 border-2 p-4 rounded-2xl shadow-orange-300 shadow-sm duration-700 hover:scale-105 ease-in-out'>
              <FaReact className='text-7xl'/>
              <p className='text-white'>React Js</p>
            </li>
            
        </ul>
    </div>
  )
}

export default Skills