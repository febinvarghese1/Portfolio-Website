import Link from "next/link";
import React from "react";
import Image from "next/image";
import projectStyles from "../styles/Projects.module.css";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  

  const hoverAnimate = {
    position: "relative",
    zIndex: 1,
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
    },
  };

  return (
    <div className={projectStyles.container}>
      <h1 className={projectStyles.projectTitle}>Projects: </h1>
      <div className={projectStyles.projects}>
        {projects.map(({id,image,title,description,tags,source,visit}) => (
          <div key={id}>
            <motion.div
              whileHover={hoverAnimate}
              className={projectStyles.project}
            >
              <div className="w-full">
                <Image
                  src={image}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  alt=""
                />
                </div>
                <div className="text-center"><h1 className="dark:text-white font-bold text-5xl">{title}</h1></div>
                <p className="dark:text-white w-full px-3 py-12 text-justify ">{description}</p>
                <div className="dark:text-white">
                  <h1>Technologies used</h1>
                  <ul className="flex justify-around p-8 ">
                  {tags.map((tag,i)=>(
                    <li key={i} className="md:mx-5 md:py-3 md:text-xl  sm:flex flex-col mx-2  border-b-2 border-slate-900">{tag}</li>
                  ))}
                  </ul>
                  <ul className="list-none p-0 flex justify-around my-9 ">
                    <a href={visit} className="text-xl cursor-pointer border-2 rounded dark:border-white border-black p-2 mb-6">
                    Live
                    </a>
                    <a href={source} className="text-xl cursor-pointer border-2 rounded dark:border-white border-black p-2 mb-6">
                    Code
                    </a>
                  </ul>
                </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
