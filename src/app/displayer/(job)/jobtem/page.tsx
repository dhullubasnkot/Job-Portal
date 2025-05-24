import React from "react";
import JobTemplate from "../jobtemplate/page";

const Managment = [
  {
    id: 1,
    logo: "/linkdin.png",
    name: "Tech Solutions Ltd.",
    location: "Kathmandu, Nepal",
    title: "Frontend Developer",
    jobType: "Full-time",
    timePosted: "2 days ago",
    description:
      "Looking for a skilled React developer with experience in Next.js.",
    skill1: "React",
    skill2: "Next.js",
    skill3: "Tailwind CSS",
    hours: 15,
  },
  {
    id: 2,
    logo: "/company-logo2.png",
    name: "Code Masters Inc.",
    location: "Lalitpur, Nepal",
    title: "Backend Developer",
    jobType: "Part-time",
    timePosted: "5 hours ago",
    description: "Node.js and Express.js developer needed for API development.",
    skill1: "Node.js",
    skill2: "Express.js",
    skill3: "MongoDB",
    hours: 20,
  },
  {
    id: 3,
    logo: "/company-logo.png",
    name: "Tech Solutions Ltd.",
    location: "Kathmandu, Nepal",
    title: "Frontend Developer",
    jobType: "Full-time",
    timePosted: "2 days ago",
    description:
      "Looking for a skilled React developer with experience in Next.js.",
    skill1: "React",
    skill2: "Next.js",
    skill3: "Tailwind CSS",
    hours: 15,
  },
  {
    id: 4,
    logo: "/company-logo2.png",
    name: "Code Masters Inc.",
    location: "Lalitpur, Nepal",
    title: "Backend Developer",
    jobType: "Part-time",
    timePosted: "5 hours ago",
    description: "Node.js and Express.js developer needed for API development.",
    skill1: "Node.js",
    skill2: "Express.js",
    skill3: "MongoDB",
    hours: 20,
  },
];

const ManagmentData = () => {
  return (
    <div className=" w-[100vw] justify-center items-center flex">
      <div className=" grid grid-cols-3 w-[60vw] gap-[1vw]">
        {Managment.map((job) => {
          console.log("Passing job data:", job);
          return <JobTemplate key={job.id} temp={job} />;
        })}
      </div>
    </div>
  );
};

export default ManagmentData;
