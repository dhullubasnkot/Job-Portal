// import Image from "next/image";
// import { JobLinkIcon, Search01Icon } from "hugeicons-react";
// import Link from "next/link";
// import CategorySlider from "../cat/page";
// import Middler from "../middle/page";
// import Job from "../jobofday/page";
// import ManagmentData from "./(job)/jobtem/page";
// import Best from "../best/page";
// import Classes from "../classes/page";
// import TopRec from "../toprec/page";
// import JobCountry from "../joblocation/page";

// import { ReactNode } from "react";
// const Displayer = ({
//   ManagementDataParallel,
// }: {
//   ManagementDataParallel: ReactNode;
// }) => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center gap-8 p-8">
//         <div className=" p-6 flex-wrap w-[450px]">
//           <p className="text-4xl font-bold text-gray-400 mb-4 leading-snug">
//             The <span className="text-blue-500 text-5xl">Easiest Way</span> to
//             Get Your New Job
//           </p>
//           <p className="text-2xl text-gray-400 leading-8">
//             Each month, more than 3 million job seekers turn to our website in
//             their search for work, making over 140,000 applications every single
//             day.
//           </p>

//           <div className="relative mt-2 w-[420px]">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="border-2 border-gray-400 p-2 pr-12 rounded-lg h-[48px] w-full"
//             />
//             <Search01Icon
//               size={24}
//               color={"#000000"}
//               variant={"stroke"}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2"
//             />
//           </div>
//         </div>
//         <div className="flex ml-[300px]">
//           <Image
//             src="/job.jpg"
//             alt="Job search illustration"
//             className="rounded-2xl"
//             width={500}
//             height={500}
//           />
//         </div>
//       </div>
//       <div className="flex flex-row gap-4 p-8 text-gray-400 justify-center ">
//         <p className="font-bold text-black">Popular Searches:</p>
//         <div className=" flex gap-4 underline">
//           <Link href="">Designer</Link>
//           <Link href="">Developer</Link>
//           <Link href="">Manager</Link>
//           <Link href="">Marketing</Link>
//           <Link href="">Finance</Link>
//         </div>
//       </div>
//       <div>
//         <CategorySlider />
//       </div>

//       <div>
//         <Middler />
//       </div>
//       <div>
//         <Job />
//       </div>
//       <div>
//         <ManagmentData />
//       </div>
//       <div>
//         <Best />
//       </div>
//       <div>
//         <Classes />
//       </div>
//       <div>
//         <TopRec />
//       </div>
//       <div>
//         <JobCountry />
//       </div>
//     </>
//   );
// };

// export default Displayer;

export default function NullPage(){
  return(
    <div></div>
  )
}