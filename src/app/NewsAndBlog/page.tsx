"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const NewsData = [
  {
    image: "/3.png",
    link: "/home",
    title: "Interview Question: Why Don’t You Have a Degree?",
    description:
      "Learn how to respond if an interviewer asks why you don’t have a degree, with example answers to help you craft a strong response.",
    tag: "News",
    author: "William Kend",
    date: "06 September",
    readTime: "9 mins to read",
  },
  {
    image: "/4.png",
    link: "/job-tips",
    title: "21 Job Interview Tips: How To Make a Great Impression",
    description:
      "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    tag: "News",
    author: "Sarah Harding",
    date: "06 September",
    readTime: "8 mins to read",
  },
  {
    image: "/5.png",
    link: "/strengths-weaknesses",
    title: "39 Strengths and Weaknesses To Discuss in a Job Interview",
    description:
      "Discover key strengths and weaknesses to discuss in an interview and how to present them professionally.",
    tag: "Events",
    author: "Steven Jobs",
    date: "06 September",
    readTime: "6 mins to read",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md transition hover:bg-gray-200"
    onClick={onClick}
    aria-label="Previous"
  >
    <span>{"<"}</span>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md transition hover:bg-gray-200"
    onClick={onClick}
    aria-label="Next"
  >
    <span>{">"}</span>
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const News = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">News and Blog</h2>
        <p className="text-gray-500 mt-2">
          Get the latest news, updates, and tips
        </p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {NewsData.map((item, index) => (
            <div key={index} className="px-4">
              <Link
                href={item.link}
                className="block bg-white border rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
              >
                <Image
                  src={item.image}
                  width={400}
                  height={250}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-4 text-gray-500 text-sm">
                    <span className="font-medium">{item.author}</span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
