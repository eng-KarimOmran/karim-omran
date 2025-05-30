import { usePathname } from "next/navigation";

export default function useProjectData() {
  const path = usePathname();

  const projects = [
    {
      id: "01",
      path: "01-ai-lap",
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
      path: "02-recipe",
      name: "Recipe",
      description:
        "Recipe is an all-in-one platform for food lovers and home cooks. It provides a large variety of tested recipes from across the globe, offering step-by-step instructions and stunning visuals, making cooking fun and simple for everyone, no matter their skill level.",
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
        "Fresh Cart is an innovative online platform that transforms the shopping experience for fresh products. Whether you're looking for fruits, vegetables, meats, or more, it offers a simple, convenient way to browse high-quality fresh products, all delivered directly",
      technologies:
        "Javascript , Tailwind Css , Html5 , React , axios , Context , TanStack Query",
      gitHub: "https://github.com/eng-KarimOmran/FreshCart",
      demo: "https://fresh-cart-murex-six.vercel.app/",
      img: "fresh-cart.png",
    },
    {
      id: "04",
      path: "04-book-mark",
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
      path: "05-games",
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
      path: "06-weather",
      name: "Weather",
      description:
        "Weather provides real-time updates and accurate forecasts for your location. Stay informed with detailed weather reports, including temperature, humidity, wind speed, and forecasts for the coming days to help you plan your activities.",
      technologies: "Javascript , Html5 , Css , Bootstrap",
      gitHub: "https://github.com/eng-KarimOmran/The-Weather/",
      demo: "https://the-weather-now-one.vercel.app/",
      img: "weather.png",
    },
  ];

  const currentPath = path.split("/").pop();
  const indexProject = projects.findIndex(
    (project) => project.path === currentPath
  );

  if (indexProject !== -1) {
    const data = {
      ...projects[indexProject],
      projectNext:
        indexProject < projects.length - 1
          ? projects[indexProject + 1].path
          : projects[indexProject].path,
      projectPrev:
        indexProject > 0
          ? projects[indexProject - 1].path
          : projects[indexProject].path,
    };
    return data;
  }

  return null;
}
