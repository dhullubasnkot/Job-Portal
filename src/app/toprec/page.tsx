import Image from "next/image";
import { Location01Icon } from "hugeicons-react";

const TopRec = () => {
  const recruiters = [
    {
      name: "LinkedIn",
      logo: "/linkdin.png",
      rating: 4,
      location: "New Work Us",
      jobsOpen: "25 jobs open",
    },
    {
      name: "Company 1",
      logo: "/linkdin.png",
      rating: 3.8,
      location: "Location 1",
      jobsOpen: "15 jobs open",
    },
    {
      name: "Company 2",
      logo: "/linkdin.png",
      rating: 5,
      location: "Location 2",
      jobsOpen: "30 jobs open",
    },
    {
      name: "Company 3",
      logo: "/linkdin.png",
      rating: 2.9,
      location: "Location 3",
      jobsOpen: "12 jobs open",
    },
    {
      name: "Company 4",
      logo: "/linkdin.png",
      rating: 4.6,
      location: "Location 4",
      jobsOpen: "18 jobs open",
    },
    {
      name: "Company 5",
      logo: "/linkdin.png",
      rating: 3.5,
      location: "Location 5",
      jobsOpen: "22 jobs open",
    },
    {
      name: "Company 6",
      logo: "/linkdin.png",
      rating: 4.1,
      location: "Location 6",
      jobsOpen: "20 jobs open",
    },
    {
      name: "Company 7",
      logo: "/linkdin.png",
      rating: 4.4,
      location: "Location 7",
      jobsOpen: "10 jobs open",
    },
    {
      name: "Company 8",
      logo: "/linkdin.png",
      rating: 4.7,
      location: "Location 8",
      jobsOpen: "8 jobs open",
    },
    {
      name: "Company 9",
      logo: "/linkdin.png",
      rating: 3.6,
      location: "Location 9",
      jobsOpen: "25 jobs open",
    },
    {
      name: "Company 10",
      logo: "/linkdin.png",
      rating: 4.3,
      location: "Location 10",
      jobsOpen: "15 jobs open",
    },
    {
      name: "Company 11",
      logo: "/linkdin.png",
      rating: 4.0,
      location: "Location 11",
      jobsOpen: "30 jobs open",
    },
    {
      name: "Company 12",
      logo: "/linkdin.png",
      rating: 4.5,
      location: "Location 12",
      jobsOpen: "20 jobs open",
    },
    {
      name: "Company 13",
      logo: "/linkdin.png",
      rating: 3.7,
      location: "Location 13",
      jobsOpen: "12 jobs open",
    },
    {
      name: "Company 14",
      logo: "/linkdin.png",
      rating: 4.6,
      location: "Location 14",
      jobsOpen: "18 jobs open",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center mt-10">
        <h1 className="text-2xl  font-bold">Top Recruiters</h1>
        <p className="text-lg">
          Discover your next career move, freelance gig, or internship
        </p>
      </div>
      <div className=" w-[100vw] justify-center items-center flex mt-8">
        <div className="grid grid-cols-5 w-[80vw] gap-[1vh]">
          {recruiters.map((recruiter, index) => (
            <div
              key={index}
              className="w-[230px] h-[106px] border-2 rounded-lg p-4 "
            >
              <div className="flex items-center gap-4">
                <Image
                  src={recruiter.logo}
                  height={40}
                  width={40}
                  alt={`${recruiter.name} Logo`}
                />
                <div>
                  <h2 className="font-semibold">{recruiter.name}</h2>
                  <p className="text-sm text-gray-500">
                    {"⭐".repeat(Math.floor(recruiter.rating))}/5
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <Location01Icon width={15} height={15} />
                <h3>{recruiter.location}</h3>
                <p>{recruiter.jobsOpen}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopRec;
