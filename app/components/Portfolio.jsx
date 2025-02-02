import { assets, projects } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullStack", label: "Full Stack" },
  ];
  const [filteredProjects, setFilteredProjects] = useState([]);

  const ProjectCard = ({ project }) => {
    return (
      <div className="relative w-full md:w-[20rem] h-[14rem] rounded-lg overflow-hidden shadow-lg group">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
        />

        {/* Overlay Content (Initially Hidden) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-black">{project.name}</h3>
          <p className="text-sm text-black text-center">
            {project.description}
          </p>

          <div className="mt-4 flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 transition"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const newProjects =
      activeTab === "all"
        ? projects
        : projects.filter((project) => project.type === activeTab);
    setFilteredProjects(newProjects);
  }, [activeTab]);

  return (
    <div id="work" className=" w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className=" text-center text-5xl font-Ovo">My latest works</h2>
      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio . Experience a collection of
        projects showcasing my expertise in full stack development .
      </p>
      {/* Tabs */}
      <div className="flex justify-center border border-gray-400 p-4 md:p-2 rounded-full mt-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-0 md:px-6 py-0 md:py-2 mx-2 text-sm font-medium md:text-lg transition-all ${
              activeTab === tab.id
                ? "text-white bg-orange-500 rounded-lg"
                : "text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex ml-10 justify-start items-center flex-wrap gap-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
