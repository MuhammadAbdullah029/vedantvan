import React, { useEffect, useRef } from 'react'
import Slider from '../components/Slider.jsx'
import {
  Bot,
  Boxes,
  ClipboardCheck,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  Headphones,
  PenTool

} from "lucide-react";
import useScrollAnimation from '../components/useScrollAnimation.js';

const Skills = () => {

  const data = [
    {
      name: "Product Management",
      icon: Boxes
    },
    {
      name: "AI Automation",
      icon: Bot
    },
    {
      name: "Project Management",
      icon: ClipboardCheck
    },
    {
      name: "Cross-Functional Collaboration",
      icon: Users
    },
    {
      name: "Data & Insights",
      icon: BarChart3
    },
    {
      name: "Operations and Administration",
      icon: Settings
    },
    {
      name: "Faceless Content Creation",
      icon: PenTool
    },
    {
      name: "Social Media Management",
      icon: Users
    },
    {
      name: "Technical Customer Service",
      icon: Headphones
    },
    {
      name: "Growth & Lead Generation",
      icon: TrendingUp
    },
    {
      name: "Influencer Marketing",
      icon: Users
    },
    {
      name: "Workflow Optimization",
      icon: Bot
    },
    {
      name: "Operations Management",
      icon: ClipboardCheck
    },

  ];

  const headingRef = useRef(null)

  useScrollAnimation(headingRef)

  return (
    <>
      <div className="w-[100%] h-[100vh]  xl:h-[85vh] md:p-[3rem] p-[1rem] ">
        <div className="w-[100%] h-[100%] bg2 md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col items-center justify-between p-[1vw] ">
          <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
            <h1 ref={headingRef} className='md:text-[5vw] text-4xl font-bold white ' >Skills</h1>
            <p className='xl:text-[1.5vw] text-[4.3vw] leading-[1.2] white ' >As an AI Automation Specialist I build automated workflows that save teams massive time and keep operations smooth. As a Product Manager I take projects from idea to launch and make sure features actually deliver. On top of that I can drive growth through faceless content creation, social media account management, influencer marketing, customer success and lead generation, covering both efficiency and user acquisition.</p>
          </div>
          <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] overflow-hidden md:mt-0 mt-[2rem] ">
            <Slider items={data} speed={11} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills