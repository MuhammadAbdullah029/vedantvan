import React from 'react'
import Slider from './Slider'
import {
  Bot,             
  Boxes,          
  ClipboardCheck,  
  Users,           
  BarChart3,       
  Settings         
} from "lucide-react";

const Skills = () => {

    const data = [
  {
    name: "Automation & AI",
    icon: Bot
  },
  {
    name: "Product Management",
    icon: Boxes
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
  
  
];
    return (
        <>
            <div className="w-[100%] h-[90vh] md:p-[3rem] p-[1rem] ">
                <div className="w-[100%] h-[100%] bg-[#F7F6F6] md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col items-center justify-between p-[1vw] ">
                    <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
                        <h1 className='text-4xl font-bold ' >Skills</h1>
                        <p>Experienced in product management, AI automation, project management, operations, and customer success, with a proven track record of launching features, leading end-to-end projects, and building automation workflows that save teams thousands of hours annually.</p>
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