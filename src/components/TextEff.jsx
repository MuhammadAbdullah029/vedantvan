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
        <div className="texteff" ref={containerRef}>
            <h1>Hi, I’m Vedant</h1>
            <h1>I bring 8+ years of experience in product management,</h1>
            <h1>AI automation, project management, operations, and</h1>
            <h1>customer success. Over the years, I’ve launched new</h1>
            <h1>features, led big projects from start to finish, and built</h1>
            <h1>100+ automation workflows that saved teams more than</h1>
            <h1>52,000 hours a year.I love solving problems,</h1>
            <h1>learning new tools fast,and finding smarter ways to get </h1>
            <h1>work done.At the end of the day, I’m happiest when </h1>
            <h1>I’m helping teams and clients move faster,</h1>
            <h1>stress less, and hit their goals with ease.</h1>

        </div>
    );
};

export default TextEff