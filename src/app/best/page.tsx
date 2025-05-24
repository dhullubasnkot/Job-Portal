"use client"; // Required for Framer Motion in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Best = () => {
  return (
    <div className="flex p-6 gap-16 mt-8 relative">
      {/* Chart Image with Slide Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-[300px] h-[200px] opacity-100 z-0"
      >
        <Image src="/img-chart.png" alt="Chart" width={300} height={200} />
      </motion.div>

      {/* Main Image with Zoom Hover Effect */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative p-4"
      >
        <div className="relative rounded-xl overflow-hidden ml-[100px]">
          <Image
            src="/img1.png"
            alt="Group of people"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="h-[300px] w-[550px] ml-9 leading-loose mt-20"
      >
        <h1 className="text-gray-500 text-3xl font-bold">Millions Of Jobs.</h1>
        <p className="text-5xl font-bold">
          Find The One That’s <span className="text-blue-600">Right</span> For
          You
        </p>
        <div>
          <p className="leading-tight mt-4">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>
        </div>

        {/* Button & Link */}
        <div className="flex justify-start gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-base font-bold border h-[50px] w-[140px] bg-blue-600 rounded-lg text-white"
          >
            Search Job
          </motion.button>
          <div className="flex mt-4">
            <Link href="" className="text-xs underline text-gray-500">
              Learn More...
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Best;
