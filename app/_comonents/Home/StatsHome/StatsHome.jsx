import React from "react";
import Count from "./Count";

export default function StatsHome() {

  const stats = [
    { content: "Years Experience", num: 1 },
    { content: "Projects Delivered", num: 6 },
    { content: "Technologies Mastered", num: 7 },
    { content: "Code Contributions", num: 10 },
  ];

  return (
    <div className="flex items-center justify-center md:justify-between w-full py-2 flex-wrap">
      {stats.map((stat) => (
        <div
          key={stat.content}
          className="flex items-center gap-1 justify-center w-full md:w-6/12 lg:w-auto max-w-[250px] pb-3 pt-8 border-b-[1px] border-gray-300/20"
        >
          <Count num={stat.num} />
          <span className="max-w-[100px]">{stat.content}</span>
        </div>
      ))}
    </div>
  );
}
