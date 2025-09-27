import React from 'react'
import Slider from './Slider'
import { 
  Bot, 
  Code, 
  ClipboardCheck, 
  Palette, 
  BookOpen, 
  BarChart3 
} from "lucide-react";

const Tools = () => {

    const tools = [
  // Automation Platforms
  { name: "Microsoft Power Automate", icon: Bot },
  { name: "UiPath", icon: Bot },
  { name: "Zapier", icon: Bot },
  { name: "n8n", icon: Bot },

  // AI & Coding
  { name: "Vibe Coding", icon: Code },
  { name: "Prompt Engineering", icon: Code },
  { name: "RAG", icon: Code },
  { name: "API Integration", icon: Code },

  // Project Management
  { name: "Jira", icon: ClipboardCheck },
  { name: "Trello", icon: ClipboardCheck },
  { name: "Asana", icon: ClipboardCheck },
  { name: "Hubspot", icon: ClipboardCheck },

  // Design & Prototyping
  { name: "Figma", icon: Palette },
  { name: "Canva", icon: Palette },
  { name: "UK Pilot", icon: Palette },

  // Knowledge Management
  { name: "Notion", icon: BookOpen },
  { name: "Confluence", icon: BookOpen },

  // Data & Analytics
  { name: "SQL", icon: BarChart3 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Looker Studio", icon: BarChart3 }
];

    return (
        <>
            <div className="w-[100%] h-[100vh] md:p-[3rem] p-[1rem] ">
                <div className="w-[100%] h-[100%] bg-[#F7F6F6] md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col items-center justify-between p-[1vw] ">
                    <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] overflow-hidden ">
                        <Slider items={tools} speed={9} />
                    </div>
                    <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
                        <h1 className='text-4xl font-bold ' >Tools</h1>
                        <p>A versatile professional skilled in automation, AI, project management, design, knowledge management, and data analytics, with hands-on experience using tools like Power Automate, UiPath, Zapier, Figma, Notion, SQL, Power BI, and more</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools