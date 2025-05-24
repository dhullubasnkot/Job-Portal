import Image from "next/image";
const Middler = () => {
  return (
    <>
      <div className="flex flex-row justify-center mt-9 bg-white">
        <div className="flex h-[201px] w-[947px] border-2">
          <Image src="/hire1.png" alt="hire1" width={300} height={211} />
          <div className=" w-[150px] h-full text-xl text-gray-400 ml-20 mt-10 ">
            <p>
              Let’s &nbsp; <span className="text-2xl text-blue-500">Work</span>
              &nbsp; Together & &nbsp;
              <span className="text-2xl text-blue-500">Explore</span>&nbsp;
              Opportunities
            </p>
          </div>
          <button className="bg-blue-500 h-[54px] w-[190px] rounded-lg text-white mt-20 ml-20">
            Apply Now
          </button>
          <Image src="/hire2.png" alt="hire1" width={300} height={211} />
        </div>
      </div>
      {/* <div>
        <div>
          <p>Jobs of the day</p>
          <p>Search and connect with the right candidates faster.</p>
        </div>
        <div>
            <
          <button className=" border-2 h-[46px] w-[140px]">Managment</button>
        </div>
      </div> */}
    </>
  );
};
export default Middler;
