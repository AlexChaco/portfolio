"use client";

import React from "react";
import CountUp from "react-countup";
import { data } from "@/lib/data";

const stats = [
  {
    number: data.stats.experience.value,
    text: data.stats.experience.name,
  },
  {
    number: data.stats.projects.value,
    text: data.stats.projects.name,
  },
  {
    number: data.stats.technologies.value,
    text: data.stats.technologies.name,

  },
  {
    number: data.stats.commits.value,
    text: data.stats.commits.name,

  },
];

const Stats = () => {
  return (
    <div className="container mx-auto" >
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {
          stats.map((stat, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6x1 font-extrabold"
                />
                <p className={`${stat.text.length< 15 ? "max-w-[100px]": "max-w-{150px"} leading-snug text-white/80`}>
                  {stat.text}
                </p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};  

export default Stats;