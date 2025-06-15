import React from "react";
import { redirect } from "next/navigation";
import ContentProject from "../ContentProject/page";

export default function Project({ params }) {
  const path = params.project.split("-")[0];

  const projects = [
    {
      id: "01",
      path: "01-ai-lap",
      name: "Ai Lap",
      description:
        "Ai Lap is a versatile platform designed to help students quickly dive into the world of artificial intelligence and programming...",
      technologies: "Html5 , Tailwind Css , Next , Javascript",
      gitHub: "https://github.com/eng-KarimOmran/ai-lap",
      demo: "https://ai-lap.vercel.app/",
      img: "Ai-lap.jpg",
    },
    {
      id: "02",
      path: "02-recipe",
      name: "Recipe",
      description:
        "Recipe is an all-in-one platform for food lovers and home cooks...",
      technologies: "Javascript , Scss , Html5 , React , axios",
      gitHub: "https://github.com/eng-KarimOmran/Recipe",
      demo: "https://recipe-seven-olive.vercel.app/",
      img: "recipe.png",
    },
    {
      id: "03",
      path: "03-fresh-cart",
      name: "Fresh Cart",
      description:
        "Fresh Cart is an innovative online platform that transforms the shopping experience for fresh products...",
      technologies: "Javascript , Tailwind Css , Html5 , React , axios , Context , TanStack Query",
      gitHub: "https://github.com/eng-KarimOmran/FreshCart",
      demo: "https://fresh-cart-murex-six.vercel.app/",
      img: "fresh-cart.png",
    },
    {
      id: "04",
      path: "04-book-mark",
      name: "Book Mark",
      description:
        "Book Mark is a simple and intuitive platform to organize, save, and manage your favorite websites...",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/Bookmark",
      demo: "https://book-mark-beryl.vercel.app/",
      img: "book-mark.png",
    },
    {
      id: "05",
      path: "05-games",
      name: "Games",
      description:
        "Games is an interactive platform that offers a wide variety of games for all interests...",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/Games",
      demo: "https://games-online-nu.vercel.app/",
      img: "games.png",
    },
    {
      id: "06",
      path: "06-weather",
      name: "Weather",
      description:
        "Weather provides real-time updates and accurate forecasts for your location...",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/The-Weather/",
      demo: "https://the-weather-now-one.vercel.app/",
      img: "weather.png",
    },
  ];

  const index = projects.findIndex((project) => project.id === path);

  if (index === -1) {
    return redirect("/not-found");
  }

  const project = projects[index];
  const nextProject = index === projects.length - 1 ? projects[0] : projects[index + 1];
  const prevProject = index === 0 ? projects[projects.length - 1] : projects[index - 1];

  const data = {
    ...project,
    projectNext: nextProject.path,
    projectPrev: prevProject.path,
  };

  return (
    <section className="min-h-[calc(100dvh-100px)] flex flex-col items-center justify-center fadeIn-content">
      <ContentProject data={data} />
    </section>
  );
}