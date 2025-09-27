import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slider = ({ items, speed }) => {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
  const container = containerRef.current;
  if (!container || !container.children.length) return;

  const itemHeight = container.children[0].offsetHeight;
  const singleSetHeight = itemHeight * items.length;

  if (tlRef.current) tlRef.current.kill();

  tlRef.current = gsap.to(container, {
    y: -singleSetHeight,
    duration: speed,
    ease: "none",
    repeat: -1,
    modifiers: {
      y: gsap.utils.unitize(
        gsap.utils.wrap(-singleSetHeight, 0)
      ),
    },
  });
}, [items, speed]);

  const handleMouseEnter = () => {
    tlRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tlRef.current?.play();
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="absolute top-0 w-full h-[12vh] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

      
      <div className="absolute bottom-0 w-full h-[12vh] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

     
      <div ref={containerRef} className="flex flex-col gap-2 p-3">
        {items.concat(items).map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="h-[10vh] flex items-center justify-between bg-white text-lg font-semibold rounded-[55px] px-4 transition-colors duration-300 hover:bg-[#F7F6F6] cursor-pointer "
            >
              {item.name}
              <Icon size={24} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
