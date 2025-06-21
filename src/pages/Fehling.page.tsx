import { useEffect, useState } from "react";
import Bubblesc from "../components/Bubblesc";
import TestTube from "../components/FehlingTube";
import Flame from "../components/Flame";

const FehlingSimulation = () => {
  const [reactionStarted, setReactionStarted] = useState(false);
  const [isPositive, setIsPositive] = useState(false);
  const [count, setcount] = useState(5);

  useEffect(() => {
    let timer: any;
    if (reactionStarted && count > 0 && !isPositive) {
      timer = setTimeout(() => {
        setcount((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [reactionStarted, count, isPositive]);

  const handleStart = () => {
    setReactionStarted(true);
    setTimeout(() => {
      setIsPositive(true);
    }, 4000);
  };

  const handleReStart = () => {
    setReactionStarted(false);
    setIsPositive(false);
    setcount(5);
  };
  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        Simulation : Test de Fehling 🧪
      </h1>
      <p className="text-center max-w-md text-gray-300 mb-2">
        Ce test détecte la présence de sucre réducteur. Cliquez sur démarrer
        pour observer la réaction.
      </p>

      <div className="relative flex justify-center items-end h-96 w-full max-w-sm">
        <TestTube
          started={reactionStarted}
          isPositive={isPositive}
          //   setIsPositive={setIsPositive}
        />
        <Flame active={reactionStarted} />
        {reactionStarted && <Bubblesc />}
      </div>

      {!reactionStarted && (
        <button
          onClick={handleStart}
          className="mt-8 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Démarrer la réaction
        </button>
      )}
      {reactionStarted && (
        <button
          onClick={handleReStart}
          className="mt-8 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Arreter
        </button>
      )}

      {reactionStarted && (
        <p className="mt-6 text-xl">
          Résultat :{" "}
          {isPositive
            ? "Présence de sucre détectée 🍬"
            : `Aucune réaction visible (${count} s)`}
        </p>
      )}
    </div>
  );
};

export default FehlingSimulation;
