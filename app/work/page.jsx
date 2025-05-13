"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CustomNextArrow = (props) => {
  return <div style={{ display: "none" }} />;
};

const CustomPrevArrow = (props) => {
  return <div style={{ display: "none" }} />;
};

export default function Work() {
  const [project, setProject] = useState(0);
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setProject(next),
  };

  const projects = [
    {
      id: "01",
      name: "Ai Lap",
      description:
        "Ai Lap is a versatile platform designed to help students quickly dive into the world of artificial intelligence and programming. It offers an interactive, safe learning environment for exploring AI technologies and programming concepts in a fun and engaging way.",
      technologies: "Html5 , Tailwind Css , Next , Javascript",
      gitHub: "https://github.com/eng-KarimOmran/ai-lap",
      demo: "https://ai-lap.vercel.app/",
      img: "Ai-lap.jpg",
    },
    {
      id: "02",
      name: "Recipe",
      description:
        "Recipe is an all-in-one platform for food lovers and home cooks. It provides a large variety of tested recipes from across the globe, offering step-by-step instructions and stunning visuals, making cooking fun and simple for everyone, no matter their skill level.",
      technologies: "Javascript , Tailwind Css , Html5 , React , axios",
      gitHub: "https://github.com/eng-KarimOmran/Recipe",
      demo: "https://recipe-seven-olive.vercel.app/",
      img: "recipe.png",
    },
    {
      id: "03",
      name: "Fresh Cart",
      description:
        "Fresh Cart is an innovative online platform that transforms the shopping experience for fresh products. Whether you're looking for fruits, vegetables, meats, or more, it offers a simple, convenient way to browse high-quality fresh products, all delivered directly",
      technologies:
        "Javascript , Tailwind Css , Html5 , React , axios , Context , TanStack Query",
      gitHub: "https://github.com/eng-KarimOmran/FreshCart",
      demo: "https://fresh-cart-murex-six.vercel.app/",
      img: "fresh-cart.png",
    },
    {
      id: "04",
      name: "Book Mark",
      description:
        "Book Mark is a simple and intuitive platform to organize, save, and manage your favorite websites. Easily categorize and access your bookmarks, ensuring a seamless browsing experience across all your devices.",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/Bookmark",
      demo: "https://book-mark-beryl.vercel.app/",
      img: "book-mark.png",
    },
    {
      id: "05",
      name: "Games",
      description:
        "Games is an interactive platform that offers a wide variety of games for all interests. Explore, play, and enjoy games across different genres, from action to puzzle, with an engaging experience for every gamer.",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/Games",
      demo: "https://games-online-nu.vercel.app/",
      img: "games.png",
    },
    {
      id: "06",
      name: "Weather",
      description:
        "Weather provides real-time updates and accurate forecasts for your location. Stay informed with detailed weather reports, including temperature, humidity, wind speed, and forecasts for the coming days to help you plan your activities.",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/The-Weather/",
      demo: "https://the-weather-now-one.vercel.app/",
      img: "weather.png",
    },
  ];

  const next = () => {
    sliderRef?.slickNext();
  };

  const previous = () => {
    sliderRef?.slickPrev();
  };
  
  return (
    <div className="min-h-[calc(100dvh-100px)] flex flex-col items-center justify-center fadeIn-content">
      <div className="w-full flex justify-between items-center flex-col-reverse lg:flex-row flex-wrap">
        <div className="w-full px-1  lg:w-6/12 lg:p-5">
          <div className="border-b-[1px] border-b-zinc-700 py-3 flex flex-col gap-5">
            <span className="text-4xl md:text-xl">{projects[project].id}</span>
            <h2 className="text-white text-3xl md:text-6xl">
              {projects[project].name}
            </h2>
            <p>{projects[project].description}</p>
            <div className="text-[var(--main-color)]">
              {projects[project].technologies}
            </div>
          </div>
          <div className="pt-5 flex gap-5 items-center">
            <a target="_blank" href={projects[project].gitHub} rel="noopener noreferrer">
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300">
                <Image
                  src="/Icon/logo-github.gif"
                  className="w-[100%]"
                  alt="github"
                  width={50}
                  height={50}
                />
              </div>
            </a>
            <a target="_blank" href={projects[project].demo} rel="noopener noreferrer">
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300 p-1">
                <Image
                  src="/Icon/logo-eye.gif"
                  className="w-[100%]"
                  alt="eye"
                  width={50}
                  height={50}
                />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full px-1 lg:w-6/12 lg:p-5 relative">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {projects.map((p) => (
              <div key={p.id} className="relative">
                <Image
                  src={`/Img/Projects/${p.img}`}
                  className="w-full h-[300px] object-contain object-center block"
                  alt={p.name}
                  width={800}
                  height={300}
                  priority={project === parseInt(p.id) - 1}
                />
              </div>
            ))}
          </Slider>
          <div className="absolute inset-0 px-1 lg:px-5 flex justify-between items-center pointer-events-none text-white">
            <button className="button pointer-events-auto" onClick={previous}>
              <IoIosArrowBack className="text-2xl" />
            </button>

            <button className="button pointer-events-auto" onClick={next}>
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}