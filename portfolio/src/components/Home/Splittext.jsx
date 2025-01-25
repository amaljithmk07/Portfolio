import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SplitTextAnimation = (sectionsRef, triggerClass = "trigger_title") => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        const heading = section.querySelector(`.${triggerClass}`);
        const paragraph = section.querySelector("p"); // Select the paragraph

        if (!heading) return;

        // Split text into lines and characters for the heading
        const split = new SplitType(heading, { types: "lines, chars" });

        // Animation for heading lines (with stagger)
        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 2.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });

        // Animation for heading characters (with stagger)
        gsap.from(split.chars, {
          x: -30,
          opacity: 0,
          duration: 2.2,
          ease: "power4.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });

        // Animation for paragraph fade-in and upward motion
        if (paragraph) {
          gsap.from(paragraph, {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.5, // Add a delay to sync with the heading animation
            scrollTrigger: {
              trigger: section,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, [sectionsRef, triggerClass]);
};

export default SplitTextAnimation;
