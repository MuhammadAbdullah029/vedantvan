import React, { useEffect, useRef } from 'react'
import Slider from '../components/Slider.jsx'
import {
    Bot,
    Code,
    ClipboardCheck,
    Palette,
    BookOpen,
    BarChart3,
    Network
} from "lucide-react";
import useScrollAnimation from '../components/useScrollAnimation.js';

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
        { name: "Looker Studio", icon: BarChart3 },


        { name: "Manychat", icon: Network },
        { name: "Apify", icon: Network },
        { name: "Apollo", icon: Network },
    ];

    const headingRef = useRef(null)

    useScrollAnimation(headingRef)

    return (
        <>
            <div className="w-[100%] md:h-[115vh]  xl:h-[95vh] h-[130vh] md:p-[3rem] p-[1rem] ">
                <div className="w-[100%] h-[100%] bg2 md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col-reverse items-center justify-between p-[1vw] ">
                    <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[40%] rounded-[15px] overflow-hidden ">
                        <Slider items={tools} speed={19} />
                    </div>
                    <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[60%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
                        <h1 ref={headingRef} className='md:text-[5vw] text-4xl font-bold white ' >Tools</h1>
                        <p className='xl:text-[1.5vw] text-[4.3vw] leading-[1.2] mb:pb-0 pb-4 white ' >I love using tools that will help me get things done faster with accuracy. For automation I use Zapier, Make, Power Automate and many more to build automation workflows that save hours every week. For product/project management and communication I’m comfortable with Trello, Asana, Slack, Jira, Devrev and Notion to keep everything on track without extra meetings.
                            On the content side I use Opus clip, Elevenlabs and CapCut to create faceless content and manage social media with tools like manychat etc. For outreach and lead generation I rely on Apify, Apollo, and Hunter to find and connect with the right people. I also know support tools like Intercom and Zendesk to keep users happy, and I use analytics platforms such as Google Analytics and Mixpanel to track growth and performance.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools