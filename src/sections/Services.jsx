import React, { useRef } from "react";
import { Cpu, ClipboardCheck, Workflow } from "lucide-react"; // Example icons
import useScrollAnimation from "../components/useScrollAnimation";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "AI Automation",
      desc: "Leverage AI and automation tools to streamline repetitive tasks, reduce manual work, and increase efficiency. I create workflows that connect apps, extract data, and automate processes end-to-end using tools like Power Automate and n8n.",
      icon: <Cpu size={24} strokeWidth={2} />,
    },
    {
      id: 2,
      title: "Product & Project Management",
      desc: "Plan, execute, and deliver products or projects successfully. I help define roadmaps, manage backlogs, track progress, and ensure teams collaborate smoothly to hit deadlines and achieve business goals.",
      icon: <ClipboardCheck size={24} strokeWidth={2} />,
    },
    {
      id: 3,
      title: "Operations",
      desc: "I can handle day-to-day operations to keep things running smoothly. This includes managing workflows, tracking tasks, coordinating between teams, organizing resources, and ensuring processes are efficient and consistent. I also create simple SOPs, monitor progress, and support teams in executing their work effectively.",
      icon: <Workflow size={24} strokeWidth={2} />,
    },
  ];

  const headingRef = useRef(null)
      
  useScrollAnimation(headingRef)

  return (
    <section className="w-full sm:h-auto md:h-[85vh] lg:h-[63vh] p-[1rem] md:px-12">
      <div className="w-full h-full bg1 md:rounded-[25px] rounded-[15px] md:p-8  p-3 pt-6 pb-6">
        {/* Section Title */}
        <h1 ref={headingRef} className="text-3xl md:text-5xl font-bold mb-12 text-center">
          What I Offer
        </h1>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col bg-white rounded-[15px] p-6 shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300 w-full md:w-1/3"
            >
              {/* Icon + ID */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F7F6F6] text-gray-700">
                  {card.icon}
                </div>
                <span className="text-gray-500 font-semibold">0{card.id}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-xl font-bold mb-4">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
