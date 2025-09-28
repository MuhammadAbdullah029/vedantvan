import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slider = ({ items, speed }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !container.children.length) return;

    // Kill any existing animation
    if (animationRef.current) animationRef.current.kill();

    const firstItem = container.children[0];
    const itemHeight = firstItem.offsetHeight;
    const gap = 8; // gap-2 = 8px
    const itemWithGap = itemHeight + gap;
    const totalHeight = itemWithGap * items.length;

    // Set initial position
    gsap.set(container, { y: 0 });

    // Create seamless infinite animation
    animationRef.current = gsap.fromTo(
      container,
      { y: 0 },
      {
        y: -totalHeight,
        duration: speed,
        ease: "none",
        repeat: -1,
        repeatDelay: 0,
        onUpdate: function() {
          // When we've moved past the original items, reset position seamlessly
          const currentY = gsap.getProperty(container, "y");
          if (currentY <= -totalHeight) {
            gsap.set(container, { y: 0 });
          }
        }
      }
    );

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [items, speed]);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.resume();
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top gradient fade */}
      <div className="absolute top-0 w-full h-[12vh] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 w-full h-[12vh] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
     
      <div ref={containerRef} className="flex flex-col gap-2 p-3">
        {/* Render items three times for seamless loop */}
        {[...items, ...items, ...items].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${i}`}
              className="h-[10vh] flex items-center justify-between bg-white text-lg font-semibold rounded-[55px] px-4 transition-colors duration-300 hover:bg-[#F7F6F6] cursor-pointer"
            >
              {item.name}
              <Icon color={"#061B57"} size={24} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;