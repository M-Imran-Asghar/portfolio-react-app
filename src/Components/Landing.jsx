import React, { useState } from "react";
import { saveAs } from "file-saver";
import { headerData } from "../Data/HeaderData";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "./Button";
import Sidebar from "../Data/Sidebar";
import { socialData } from "../Data/SocialData";

function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const handelSideBar = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadCv = () => {
    setTimeout(() => {
      saveAs(headerData.resume, "resume.pdf");
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-orange-700 relative items-center flex w-5/12 ">
        <h1 className="w-fit h-fit top-10 absolute left-10 font-extrabold text-2xl">
          {headerData.name}
        </h1>
        {isOpen && <Sidebar handelSideBar={handelSideBar}  />}
        <img
          className=" w-60 h-60  rounded-full border-8 border-black absolute"
          style={{ right: "-6rem" }}
          src={headerData.image}
          alt="profileImage"
        />
        ;
        <div className="absolute bottom-6 flex right-16 gap-4">
          {socialData.github && (
            <a href={socialData.github} target="_blank" rel="noreffer">
              <FaGithub className="size-7 hover:text-white" />
            </a>
          )}
          {socialData.linkedin && (
            <a href={socialData.linkedin} target="_blank" rel="noreffer">
              <FaLinkedin className="size-7 hover:text-white" />
            </a>
          )}
        </div>
      </div>
      <div className="bg-zinc-800 flex items-center justify-center flex-col w-3/5">
        <button
          onClick={handelSideBar}
          className="absolute right-20 top-10 text-3xl text-white"
        >
          <FaBars />
        </button>
        <h1 className="text-white text-lg font-bold">{headerData.title}</h1>
        <h1 className="text-2xl font-extrabold text-white">
          {headerData.name}
        </h1>
        <p className="w-2/4 text-white">{headerData.discription}</p>
        <div>
          <Button
            onClick={handleDownloadCv}
            label="Download Cv"
            className="mt-6 p-1 text-lg bg-transparent border-2  text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-black hover:border-black"
          />
         
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
