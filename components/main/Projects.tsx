import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Threejs.png"
          title="3D Website"
          description="Made this website using Reactjs, Threejs and Tailwind CSS."
          tech={["Reactjs", "Threejs", "Tailwind CSS"]}
          link="https://reactjs-threejs-shirt-demo.vercel.app/"
        />
        <ProjectCard
          src="/Real Estate.png"
          title="Realtor"
          description="This a Real Estate website where you can find the properties for Buying and Renting. Made it using Nextjs and RapidApi."
          tech={["Nextjs", "RapidApi"]}
          link="https://real-estate-app-vert.vercel.app/"
        />
        <ProjectCard
          src="/Carhub.png"
          title="Carhub"
          description="Here you can find the car depending on your usage like Fuel, Gas and Electric."
          tech={["Nextjs", "Typescript", "RapidApi"]}
          link="https://nextjs-car-dekho.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
