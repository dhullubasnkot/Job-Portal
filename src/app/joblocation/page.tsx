import Image from "next/image";

const jobData = [
  {
    country: "USA",
    city: "New York",
    vacancies: 5,
    companies: 129,
    imgSrc: "/usa.jpg",
  },
  {
    country: "France",
    city: "Paris",
    vacancies: 3,
    companies: 95,
    imgSrc: "/france.jpg",
  },
  {
    country: "Germany",
    city: "Berlin",
    vacancies: 7,
    companies: 160,
    imgSrc: "/germany.jpg",
  },
  {
    country: "Japan",
    city: "Tokyo",
    vacancies: 4,
    companies: 120,
    imgSrc: "/japan.jpg",
  },
  {
    country: "India",
    city: "Delhi",
    vacancies: 6,
    companies: 200,
    imgSrc: "/india.jpg",
  },
  {
    country: "Australia",
    city: "Sydney",
    vacancies: 2,
    companies: 80,
    imgSrc: "/australia.jpg",
  },
];

const JobCountry = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="font-bold text-4xl">Job by Location</p>
        <p className="text-lg ">
          Find your favourite jobs and get the benefits of yourself
        </p>
      </div>
      <div className="flex flex-wrap  gap-2 mt-10 ml-[200px]">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="border-2 w-[280px] h-[240px] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="border-2 h-[140px]">
              <Image
                src={job.imgSrc}
                height={10}
                width={280}
                alt={job.country}
                className="rounded-t-lg h-full"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold">
                {job.city}, {job.country}
              </h1>
              <div className="text-sm flex gap-6 mt-2">
                <p>{job.vacancies} Vacancies</p>
                <p>{job.companies} Companies</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCountry;
