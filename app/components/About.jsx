import { assets, education, skills, workHistory } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("work");
  const tabs = [
    { id: "education", label: "Education" },
    { id: "work", label: "Work History" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div id="about" className=" w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className=" text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20">
        <div className=" mt-20">
          <Image src={assets.manjay_work} alt="" className="w-60 rounded-3xl" />
        </div>
        <div className=" flex-1">
          <div className="max-w-4xl mx-auto py-12">
            {/* Tabs */}
            <div className="flex justify-center border border-gray-400 rounded-full mt-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
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

            {/* Tab Content */}
            <div className=" h-[420px] overflow-y-scroll pt-6">
              {activeTab === "education" && (
                <div>
                  {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "work" && (
                <div className="relative border-l-2 border-orange-500 pl-6">
                  {workHistory.map((exp, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute -left-3 top-1 bg-orange-500 w-4 h-4 rounded-full"></div>
                      <h3 className="text-xl ml-3 font-semibold text-orange-600">
                        {exp.company}
                      </h3>

                      <p className="text-gray-800 font-medium">{exp.role}</p>
                      <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-2">
                        {exp.duration}
                      </span>
                      <ul className="list-disc list-inside mt-3 text-gray-700">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "skills" && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className=" border border-gray-400 px-4 py-2 rounded-lg text-center cursor-pointer hover:-translate-y-1 duration-500"
                    >
                      <div className=" flex flex-col gap-1 justify-between items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
