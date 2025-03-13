import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";


function Sidebar({ handelSideBar, scrollToContact }) {
 
  return (
    <div
      className={`bg-gray-900 w-60 mx-auto  rounded-2xl top-20 left-0 absolute transition-transform duration-700 ease-in-out z-10`}
    >
      <div className="flex justify-end">
        <button
          
          className=" hover:cursor-pointer m-2 hover:text-white text-orange-700 text-4xl  p-1 rounded-xl "
        >
          <IoClose title="close btn" onClick={handelSideBar}/>
        </button>
      </div>
      
        <div className="text-white flex flex-col gap-4 items-center">
         
             
            <button className='mt-6 w-3/4 py-3 px-6 text-md rounded-2xl bg-transparent border-2  text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-black hover:border-black'
            >
              <Link
              to="about" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
             >
              About
             </Link>
            </button> 

            <button className='mt-6 w-3/4 py-3 px-6 text-md rounded-2xl bg-transparent border-2  text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-black hover:border-black'
            >
             <Link
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
             >
              Skills
             </Link>
            </button>

            <button className='m-6 w-3/4 py-3 px-6 text-md rounded-2xl bg-transparent border-2  text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-black hover:border-black'
            >
              <Link
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
             >
              Contact
             </Link>
            </button>            
        </div>
      
    </div>
  );
}

export default Sidebar;
