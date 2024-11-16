import React from "react";
import { aboutData } from "../Data/AboutData";

function About() {
  return (
    <div className="bg-zinc-800  pt-7" id="about">
      <hr className=" bg-orange-700 w-3/4 mx-auto h-2 rounded-md border-none " />
      <div className="flex flex-row justify-center gap-10">
        <div className="flex items-center justify-center  w-1/3">
          <div className="text-orange-700 text-4xl font-bold">
            {aboutData.title}
            <div>
              <p className="text-white text-lg text-center mt-6 ">
                {aboutData.description1} <br /> <br />
                {aboutData.description2}             
               
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 relative">
          <img
            className="h-auto mx-auto rounded-lg shadow-xl relative "
            src={aboutData.aboutImage}
            alt="image"
           
          />
        
        </div>
      </div>
    </div>
  );
}

export default About;
