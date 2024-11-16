import React, { useEffect, useRef, useState } from "react";
import { educationData } from "../Data/EducationData";
import { FaRegIdBadge } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Education() {
  const [ref, inView] = useInView({ threshold: 0.1});

  return (
    <div className="bg-zinc-800 p-10">
        <h1 className="text-orange-600 font-mono text-3xl font-bold m-4">Education</h1>
      <div className="">
        <ul className="flex justify-center items-center flex-col gap-6">
          <li
            ref={ref}
            className={`flex justify-center gap-5 bg-orange-900 w-3/6  px-10 py-6 rounded-xl transform transition-transform duration-300 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-75"
            }`}
          >
            <div className="text-white text-4xl bg-orange-600 flex items-center rounded-full px-4 ">
              <FaRegIdBadge />
            </div>
            <div className="text-white">
              <p className="text-orange-700 text-lg font-bold">
                {educationData.yearCollege}
              </p>
              <h1 className="text-xl font-mono">{educationData.title1}</h1>
              <h2 className="text-lg font-mono">{educationData.college}</h2>
            </div>
          </li>
          <li
            ref={ref}
            className={`flex justify-center gap-5 bg-orange-900 w-3/6  px-4 py-6 rounded-xl transform transition-transform duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-50"
            }`}
          >
            <div className="text-white text-4xl bg-orange-600 flex items-center rounded-full px-4 ">
              <FaRegIdBadge />
            </div>
            <div className="text-white">
              <p className="text-orange-700 text-lg font-bold">
                {educationData.yearBachelor}
              </p>
              <h1 className="text-xl font-mono">{educationData.title2}</h1>
              <h2 className="text-lg font-mono">{educationData.university}</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
