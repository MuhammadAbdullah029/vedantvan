import React from 'react'

const Services = () => {

    const cards = [
        {
            id: 1,
            title: "AI Automation",
            desc: "Leverage AI and automation tools to streamline repetitive tasks, reduce manual work, and increase efficiency. I create workflows that connect apps, extract data, and automate processes end-to-end using tools like Power Automate, and n8n."
        },
        {
            id: 2,
            title: "Product & Project Management",
            desc: "Plan, execute, and deliver products or projects successfully. I help define roadmaps, manage backlogs, track progress, and ensure teams collaborate smoothly to hit deadlines and achieve business goals."
        },
        {
            id: 3,
            title: "Operations",
            desc: "I can handle day-to-day operations to keep things running smoothly. This includes managing workflows, tracking tasks, coordinating between teams, organizing resources, and ensuring processes are efficient and consistent. I also create simple SOPs, monitor progress, and support teams in executing their work effectively."
        },
    ];

    return (
        <>
            <div className="w-full h-[95vh] p-[3rem] ">
                <div className="w-full h-full bg-[#F7F6F6] md:rounded-[25px] p-4 ">
                    <h1 className="text-4xl font-bold mb-12 text-center">What I Offer </h1>
                    <div className="flex gap-6 w-full h-[80%] items-center justify-center ">
                        {
                            cards.map((card, index) => (
                                <div key={index} className="w-[20%] h-full bg-white rounded-[15px] p-4 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all duration-300 ">
                                    <small>0{card.id}</small>
                                    <h2 className='text-xl font-bold mt-6 mb-6 ' >{card.title}</h2>
                                    <p className='text-sm ' >{card.desc}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services