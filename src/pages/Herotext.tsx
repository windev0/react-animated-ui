// src/components/HeroText.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const defaultText = "Bienvenue sur Eventify, l’animation UI facile";

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [text, settext] = useState(defaultText);

  useGSAP(() => {
    gsap.to("#red-box", {
      x: -150,
      y: -100,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotate: 180,
    });
    gsap.to("#green-box", {
      x: 200,
      y: 100,
      repeat: -1,
      duration: 2,
      yoyo: true,
      rotate: 180,
    });
    gsap.to("#blue-box", {
      x: 200,
      y: -200,
      repeat: -1,
      duration: 2,
      yoyo: true,
      rotate: 360,
    });
    gsap.to("#yellow-box", {
      x: 0,
      y: 50,
      duration: 2,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      // ease:""
    });
  }, []);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");
    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          repeat: 100,
          duration: 2.5,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    }
    console.log("object");
  }, [text]);

  const handleText = (newText: string) => {
    if (newText) {
      settext(newText);
    }
  };
  return (
    <section className="p-5 flex flex-col flex-wrap max-w-4xl mx-auto ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 text-center">
        Texte d’accueil animé
      </h1>
      <p className="mt-3 text-gray-400 text-center text-base sm:text-lg">
        Cette démo anime le texte d’accueil avec{" "}
        <code className="bg-gray-800 px-1 rounded">gsap</code>.
      </p>
      <div className="text-white mt-6 w-full">
        <p className="mb-2r">Essayez avec votre propre texte :</p>
        <form
          className="flex flex-col sm:flex-row gap-3 items-center w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem("myText") as HTMLInputElement;
            handleText(input.value);
            input.value = "";
          }}
        >
          <input
            type="text"
            name="myText"
            placeholder="Tapez ici"
            className="px-3 py-2 rounded border border-gray-600 bg-gray-900 text-white flex-1 w-full sm:w-auto"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition-colors w-full sm:w-auto"
          >
            Valider
          </button>
        </form>
      </div>
      <div
        ref={containerRef}
        className="text-2xl sm:text-4xl md:text-6xl font-bold text-center text-gray-300 leading-snug mt-8 sm:mt-12 break-words"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="word inline-block mx-1 opacity-0">
            {word}
          </span>
        ))}
      </div>
      <div className="flex justify-between  mt-8">
        <div
          id="green-box"
          className="h-20 w-20 bg-green-400 rounded-xl absolute"
        ></div>
        <div
          id="red-box"
          className="h-20 w-20 bg-red-400 rounded-xl absolute"
        ></div>
      </div>
      <div className="flex justify-end mt-5">
        <div
          id="blue-box"
          className="h-20 w-20 bg-blue-400 rounded-xl absolute"
        ></div>
        <div
          id="yellow-box"
          className="h-20 w-20 text-2xl text-center text-black bg-yellow-400 rounded-xl absolute"
        ></div>
      </div>
    </section>
  );
}
