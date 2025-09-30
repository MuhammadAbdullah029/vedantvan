import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextEff = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const headings = containerRef.current.querySelectorAll("h1");


        headings.forEach((elem) => {
            const text = elem.textContent;
            const splitted = text.split("").map((char, i) => (
                <span key={i}>{char}</span>
            ));
            elem.innerHTML = "";
            elem.append(...splitted.map((span) => {
                const s = document.createElement("span");
                s.textContent = span.props.children;
                return s;
            }));
        });


        gsap.to(".texteff h1 span", {
            color: "#111",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".texteff h1",
                start: "top 95%",
                end: "top 15%",
                scrub: 3,
                // markers: true,
            },
        });
    }, []);

    return (
        <div className="texteff w-[95%] " ref={containerRef}>
            <h1>Hi, I’m Vedant</h1>
            <h1>I bring over 8 years of experience in product management, AI automation, project management, social media management, faceless content creation, operations, and technical customer service. Over the years, I’ve launched new features, led large projects from start to finish, and built and supported more than 100 automation workflows that saved teams over 52,000 hours annually. I love solving challenges, learning new tools quickly, and finding smarter ways to get work done. At the end of the day, I’m happiest when I’m helping teams and clients move faster, stress less, and hit their goals with ease.</h1>

        </div>
    );
};

export default TextEff