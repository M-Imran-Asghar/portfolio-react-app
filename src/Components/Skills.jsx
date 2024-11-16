import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt,FaReact } from "react-icons/fa";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri"
import { AnimateScreen } from 'animate-screen'


function Skills() {
  
  return (
    <div className='bg-zinc-800 p-10' id='skills'>
        <h1 className="text-orange-600 font-mono text-3xl font-bold m-4">Skills</h1>
        <ul className={`flex items-center justify-center gap-10 mt-6`}
        >
            
            <li className='text-lg font-mono font-extrabold text-black bg-orange-700 border-black hover:bg-black hover:text-orange-700 hover:border-orange-700 border-2 p-8'>
              <FaHtml5 className='text-7xl'/>
              <p className='text-white'>HTML</p>
            </li>
            <li className='text-lg font-mono font-extrabold  bg-orange-700 border-black hover:bg-black text-indigo-700 hover:border-orange-700 border-2 p-8'>
              <FaCss3Alt className='text-7xl'/>
              <p className='text-white'>CSS</p>
            </li>
            <li className='text-lg font-mono font-extrabold  bg-orange-700 border-black hover:bg-black text-green-400 hover:border-orange-700 border-2 py-8 px-5 flex flex-col items-center'>
              <RiTailwindCssFill className='text-7xl'/>
              <p className='text-white'>Tailwind Css</p>
            </li>
            <li className='text-lg font-mono font-extrabold  bg-orange-700 border-black hover:bg-black text-yellow-600 hover:border-orange-700 border-2 py-8 px-6 flex flex-col items-center'>
              <RiJavascriptFill className='text-7xl'/>
              <p className='text-white'>JavaScript</p>
            </li>
            <li className='text-lg font-mono font-extrabold  bg-orange-700 border-black hover:bg-black text-blue-400 hover:border-orange-700 border-2 py-8 px-6 flex flex-col items-center'>
              <FaReact className='text-7xl'/>
              <p className='text-white'>React Js</p>
            </li>
            
        </ul>
    </div>
  )
}

export default Skills