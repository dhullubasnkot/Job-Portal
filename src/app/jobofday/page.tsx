"use client";
import {
  TimeManagementIcon,
  Idea01Icon,
  ManagerIcon,
  HeadsetConnectedIcon,
  BankIcon,
  MarketingIcon,
} from "hugeicons-react";
import { useRouter } from "next/navigation";

const Job = () => {
  const route = useRouter();
  function handleCategoryManagement() {
    console.log("link changed");
    route.push("/displayer/managementdata");
  }function handleCategoryMarketing() {
    console.log("link changed");
    route.push("/displayer/marketingdata");
  }
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-center flex-col items-center ">
          <p className="font-bold text-4xl text-black leading-loose">
            Jobs of the day
          </p>
          <p className="text-2xl text-gray-600">
            Search and connect with the right candidates faster.
          </p>
        </div>
        <div className="gap-8 flex-row flex justify-center items-center mt-20">
          <button
            onClick={handleCategoryManagement}
            className="border-2  h-[55px] rounded-lg w-[140px] flex items-center justify-center"
          >
            <TimeManagementIcon className="mt-1 mr-2" />
            Management
          </button>
          <button onClick={handleCategoryMarketing} className="border-2 h-[55px] rounded-lg  w-[140px] flex items-center justify-center">
            <Idea01Icon className="mt-1 mr-2" />
            Marketing
          </button>
          <button className="border-2 h-[55px] rounded-lg w-[140px] flex items-center justify-center">
            <ManagerIcon className="mt-1 mr-2" />
            Human Resources
          </button>
          <button className="border-2 h-[55px] rounded-lg w-[140px] flex items-center justify-center">
            <BankIcon className="mt-1 mr-2" />
            Finance
          </button>
          <button className="border-2 h-[55px] rounded-lg w-[140px] flex items-center justify-center">
            <HeadsetConnectedIcon className="mt-1 mr-2" />
            Customer Services
          </button>
          <button className="border-2 h-[55px]  w-[140px] rounded-lg flex items-center justify-center">
            <MarketingIcon className="mt-1 mr-2" />
            Sales
          </button>
        </div>
      </div>
    </>
  );
};
export default Job;
