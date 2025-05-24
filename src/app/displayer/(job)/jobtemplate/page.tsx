"use client";

import Image from "next/image";
import React from "react";

interface Temp {
  logo: string;
  name: string;
  location: string;
  title: string;
  jobType: string;
  timePosted: string;
  description: string;
  skill1: string;
  skill2: string;
  skill3: string;
  hours: number;
}

const JobTemplate = ({ temp }: { temp?: Temp }) => {
  if (!temp) {
    return <div className="text-red-500">Error: Job data is missing</div>;
  }

  console.log("Received job data in JobTemplate:", temp);

  return (
    <div className=" bg-white rounded-2xl shadow-lg mt-8 p-6 border border-gray-200 h-[430px] w-[270px] transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center gap-3">
        <Image
          src={temp.logo || "/default-logo.png"} // Fallback image
          alt={temp.name}
          width={45}
          height={45}
          className="rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{temp.name}</h2>
          <p className="text-sm text-gray-500">{temp.location}</p>
        </div>
      </div>

      <h3 className="font-semibold mt-4 text-xl text-gray-900">{temp.title}</h3>
      <p className="text-sm text-gray-500 mt-1">
        {temp.jobType} • {temp.timePosted}
      </p>
      <p className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-3">
        {temp.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {[temp.skill1, temp.skill2, temp.skill3].map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">
          ${temp.hours}/Hour
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobTemplate;
