import Image from "next/image";
import { Mail01Icon } from "hugeicons-react";

const NewsLetter = () => {
  return (
    <div className="max-w-6xl mx-auto border-2 flex mt-8 flex-wrap items-center justify-between p-6 bg-[#3C65F5] rounded-lg">
      <Image
        src="/newsletter-left.png"
        alt="Newsletter Left"
        height={150}
        width={150}
      />

      <div className="flex-1 text-center px-4">
        <h1 className="text-lg font-semibold mb-4">
          New Things Will Always Update Regularly
        </h1>
        <div className="relative flex ml-48">
          <Mail01Icon className="absolute left-3 mt-4 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 pl-10 pr-4 py-2 w-[400px]  h-[60px] rounded-md focus:outline-none"
          />
          <button className=" absolute ml-[265px] w-[120px] h-[40px] mt-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      <Image
        src="/newsletter-right.png"
        alt="Newsletter Right"
        height={150}
        width={150}
      />
    </div>
  );
};

export default NewsLetter;
