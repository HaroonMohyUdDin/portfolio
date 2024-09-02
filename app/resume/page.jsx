"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import React from "react";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useState } from 'react';

const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Haroon Mohy Ud Din",
    },
    {
      fieldName: "Email",
      fieldValue: "haroonshafiq4742@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "1234567809",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "Musab School System",
      degree: "O-Levels & A-levels",
      duration: "2007-2021",
    },
    {
      institution: "UCP",
      degree: "Computer Science",
      duration: "2022-2026",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";



const Resume = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-start xl:items-center">
        <Tabs
          defaultValue="Skills"
          className="flex flex-col xl:flex-row w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex flex-col w-full max-w-[350px] mx-auto xl:mx-0 mt-4 xl:mt-0 gap-4">
            <TabsTrigger value="Skills" className="py-2 px-4">Skills</TabsTrigger>
            <TabsTrigger value="Education" className="py-2 px-4">Education</TabsTrigger>
            <TabsTrigger value="About" className="py-2 px-4">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full flex ml-8">
          {activeTab === 'Skills' && (
  <TabsContent value="Skills" className="w-full h-full">
    <div className="flex flex-col gap-8 text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {skills.skillList.map((skill, index) => (
          <li key={index} className="flex justify-center items-center">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  </TabsContent>
)}

            {activeTab === 'Education' && (
              <TabsContent value="Education" className="w-full">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <ScrollArea className="max-h-[600px]">
                    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-full min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            )}

            {activeTab === 'About' && (
              <TabsContent value="About" className="w-full xl:text-left">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((info, index) => (
                      <li key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{info.fieldName}:</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            )}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
