import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Flame({ active }: { active: boolean }) {
  const flameRef = useRef(null);

  useGSAP(() => {
    if (active) {
      gsap.to(flameRef.current, {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "sine.inOut",
      });
    }
  }, [active]);

  return (
    <div
      ref={flameRef}
      style={{ bottom: -25}}
      className={`absolute  left-1/2 -translate-x-1/2 w-8 h-12 flex flex-col items-center pointer-events-none ${
        active ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      {/* Flamme principale */}
      <div
        className="w-8 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-white rounded-full blur-sm opacity-90 animate-pulse"
        style={{
          boxShadow: "0 0 32px 8px #f59e42, 0 0 64px 16px #fbbf24",
        }}
      ></div>
      {/* Petite flamme intérieure */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-t from-yellow-400 via-white to-transparent rounded-full blur-[2px] opacity-80 animate-pulse"></div>
      {/* Petite lueur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full blur-[1px] opacity-70"></div>
    </div>
  );
}

export default Flame;
