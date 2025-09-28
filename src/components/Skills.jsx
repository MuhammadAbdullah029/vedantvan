import React from 'react'
import Slider from './Slider'
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

const Skills = () => {

    const data = [
      {
        name: "Product Management",
        icon: Boxes
      },
  {
    name: "AI Automation & Workflow Optimization",
    icon: Bot
  },
  {
    name: "Project & Operations Management",
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
    name: "Social Media Management & Influencer Marketing",
    icon: Users
  },
  {
    name: "Technical Customer Service & Customer Success",
    icon: Headphones
  },
  {
    name: "Growth & Lead Generation",
    icon: TrendingUp
  },
  
  
];
    return (
        <>
            <div className="w-[100%] h-[90vh] md:p-[3rem] p-[1rem] ">
                <div className="w-[100%] h-[100%] bg-[#F7F6F6] md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col items-center justify-between p-[1vw] ">
                    <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
                        <h1 className='text-[5vw] font-bold ' >Skills</h1>
                        <p className='text-lg' >As an AI Automation Specialist I build automated workflows that save teams massive time and keep operations smooth. As a Product Manager I take projects from idea to launch and make sure features actually deliver. On top of that I can drive growth through faceless content creation, social media account management, influencer marketing, customer success and lead generation, covering both efficiency and user acquisition.</p>
                    </div>
                    <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] overflow-hidden ">
                        <Slider items={data} speed={9} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills