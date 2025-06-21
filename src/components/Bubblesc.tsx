import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Bubblesc = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bubbles = containerRef.current?.querySelectorAll(".bubble");
    if (bubbles) {
      gsap.to(bubbles, {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        repeat: -1,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-20 flex gap-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bubble w-4 h-4 bg-white/70 rounded-full"></div>
      ))}
    </div>
  );
};

export default Bubblesc;
