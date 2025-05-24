"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HeadsetConnectedIcon,
  Idea01Icon,
  BankIcon,
  MarketingIcon,
  ManagerIcon,
  TimeManagementIcon,
} from "hugeicons-react";

const categories = [
  {
    name: "Management",
    icon: <TimeManagementIcon size={40} />,
    link: "/home",
    des: "965 Jobs Available",
  },
  {
    name: "Customer Service",
    icon: <HeadsetConnectedIcon size={40} />,
    link: "/customer-service",
    des: "185 Jobs Available",
  },
  {
    name: "Finance",
    icon: <BankIcon size={40} />,
    link: "/finance",
    des: "125 Jobs Available",
  },
  {
    name: "Human Resources",
    icon: <ManagerIcon size={40} />,
    link: "/human-resources",
    des: "85 Jobs Available",
  },
  {
    name: "Marketing",
    icon: <Idea01Icon size={40} />,
    link: "/marketing",
    des: "122 Jobs Available",
  },
  {
    name: "Sales",
    icon: <MarketingIcon size={40} />,
    link: "/sales",
    des: "150 Jobs Available",
  },
];

const CustomPrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={
        "absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10  text-black rounded-full p-2 shadow-md transition"
      }
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
    >
      <span className="block w-4 h-4 border-t-2 border-r-2 border-black transform rotate-[225deg]"></span>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={
        "absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-1 text-black rounded-full p-2 shadow-md transition"
      }
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
    >
      <span className="block w-4 h-4 border-t-2 border-r-2 border-black transform rotate-[-320deg]"></span>
    </button>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function CategorySlider() {
  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Browse by Category
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Find the job that’s perfect for you. About 800+ new jobs every day.
      </p>
      <div className="relative">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <Link href={category.link} passHref>
                <div className="h-[150px] w-[220px] border rounded-lg flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md transition">
                  {category.icon}
                  <p className="text-center text-lg font-medium mt-2">
                    {category.name}
                  </p>
                  <p className="text-center text-gray-500 text-sm">
                    {category.des}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
