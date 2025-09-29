import React, { useRef, useState } from 'react'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Tools from '../sections/Tools.jsx'
import Projects from '../sections/Projects.jsx'
import Services from '../sections/Services.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import custmImg from '../assets/WhiteGloveService-Home-1.webp'

const Home = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
      tags: ["Automation", "Power Automate", "RPA"],
      title: "Browser Automation - Real Estate",
      description: [
        <>Automated <b>end-to-end real estate document order process</b> using <b>Microsoft Power Automate</b>.</>,
        <>Received <b>order details</b> from an external portal and created corresponding <b>orders internally</b>.</>,
        <>Processed and ordered required <b>documents</b>, then uploaded results back to the <b>client portal</b>.</>,
        <>Reduced <b>manual work</b>, improved <b>accuracy</b>, and sped up <b>order fulfillment</b>.</>
      ]
    }
    ,
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Automation", "RPA", "Process Optimization"],
      title: "Browser Automation",
      description: [
        <>Developed <b>automated workflows</b> with <b>Power Automate Desktop</b>.</>,
        <>Handled repetitive browser tasks: <b>data extraction</b>, <b>form filling</b>, <b>order processing</b>, and <b>portal updates</b>.</>,
        <>Reduced <b>manual workload</b> and improved <b>accuracy</b> by minimizing errors.</>
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Automation", "Desktop Automation", "Power Automate"],
      title: "Local System Automation",
      description: [
        <>Automated <b>desktop</b> and <b>application-level tasks</b> using <b>Power Automate Desktop</b>.</>,
        <>Implemented workflows for <b>file handling</b>, <b>Excel updates</b>, <b>PDF processing</b>, and <b>email management</b>.</>,
        <>Streamlined <b>system processes</b> and reduced <b>manual effort</b>.</>
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
      tags: ["Automation", "n8n", "AI Agents", "Social Media"],
      title: "Social Media Automation",
      description: [
        <>Built <b>automation agents</b> for <b>Instagram</b> and <b>TikTok</b> to gather leads, extract emails, and send <b>personalized DMs</b>.</>,
        <>Designed an <b>end-to-end workflow</b> in <b>n8n</b> with <b>AI agents</b> for <b>content creation</b> and <b>multi-platform posting</b>.</>,
        <>Automated posting to <b>LinkedIn</b>, <b>Medium</b>, <b>Facebook</b>, <b>X (Twitter)</b>, <b>Slack</b>, and <b>Gmail</b>.</>,
        <>Reduced <b>manual posting</b>, ensured <b>consistency</b>, and enabled <b>scalable content distribution</b>.</>
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Product Management", "Automation", "Data Analytics"],
      title: "Product Management",
      description: [
        <>Built and managed <b>product roadmaps</b> aligning <b>business goals</b> with <b>user needs</b>.</>,
        <>Converted requirements into clear <b>user stories</b> and <b>features</b>.</>,
        <>Automated repetitive workflows, saving teams <b>40% time</b>.</>,
        <>Launched <b>internal tools</b> to replace <b>manual spreadsheets</b>.</>,
        <>Created <b>Power BI</b> and <b>Looker dashboards</b> to track progress.</>,
        <>Collaborated with <b>engineering</b>, <b>design</b>, and <b>operations</b> to deliver results <b>on time</b>.</>
      ]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Project Management", "Agile", "Collaboration"],
      title: "Project Management",
      description: [
        <>Planned and tracked <b>projects</b> with clear <b>tasks</b> and <b>realistic deadlines</b>.</>,
        <>Facilitated <b>collaboration</b> between <b>technical</b> and <b>non-technical teams</b>.</>,
        <>Created <b>onboarding guides</b> in <b>Notion</b> and <b>Confluence</b>.</>,
        <>Organized work into <b>sprints</b>, balanced <b>priorities</b>, and resolved issues quickly.</>,
        <>Shared <b>regular updates</b> with stakeholders and documented <b>lessons learned</b>.</>
      ]
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Operations", "Reporting", "Process Optimization"],
      title: "Operations Analyst",
      description: [
        <>Tracked <b>daily workflows</b> to ensure <b>timely task completion</b>.</>,
        <>Created <b>reports</b> to highlight <b>progress</b> and detect <b>risks</b> early.</>,
        <>Organized <b>files</b> and <b>processes</b> for easy access.</>,
        <>Provided managers with <b>data-driven insights</b> for better <b>decision-making</b>.</>,
        <>Ensured <b>smooth daily operations</b>.</>
      ]
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // changed image
      tags: ["Operations", "Leadership", "Team Management"],
      title: "Operations Team Lead",
      description: [
        <>Coordinated work between <b>cross-functional teams</b>.</>,
        <>Created <b>onboarding checklists</b> and <b>process guides</b> for <b>new hires</b>.</>,
        <>Managed <b>priorities</b> and solved <b>issues</b> quickly.</>,
        <>Maintained <b>updated resources</b> for smooth <b>operations</b>.</>,
        <>Supported <b>team members</b> and ensured focus on <b>goals</b>.</>
      ]
    },
    {
      id: 9,
      image: custmImg,
      tags: ["Customer Service", "Operations", "Sales"],
      title: "Customer Service",
      description: [
        <>Delivered <b>customer support</b> across multiple channels with <b>90%+ satisfaction</b>.</>,
        <>Resolved <b>complex issues</b> to improve <b>retention</b>.</>,
        <>Maintained a <b>98% response rate</b> and exceeded <b>sales targets</b> by <b>15%</b>.</>,
        <>Handled <b>store tasks</b> such as <b>sales</b>, <b>inventory</b>, and <b>billing</b>.</>,
        <>Developed strong <b>empathy</b> and <b>communication skills</b>.</>
      ]
    }
  ];


  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        servicesRef={servicesRef}
      />
      <Hero
        aboutRef={aboutRef}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <Tools />
      <div ref={workRef} >
        <Projects projects={projects} />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <Footer
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        servicesRef={servicesRef}
      />
    </>
  )
}

export default Home