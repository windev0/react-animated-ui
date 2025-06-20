import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { COLORS } from "../utils/constants";
import CarSimulation from "../components/Car";
import MotoSimulation from "../components/Moto";
import type { CarColorType } from "../utils/type";
import gsap from "gsap";

const VehiculePage = () => {
  const [carColor, setcarColor] = useState<CarColorType>("blue");
  useGSAP(() => {
    const carId = document.getElementById(`${carColor}-car`);
    const motoId = document.getElementById(`${carColor}-moto`);

    gsap.to(carId, {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
    gsap.to(motoId, {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  }, []);

  const toggleCarColor = (color: CarColorType) => {
    setcarColor(color);
  };

  useEffect(() => {
    console.log("carColor", carColor);
  }, [carColor]);
  return (
    <div className="p-5 flex-wrap">
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        Cette démo anime une voiture avec <code>gsap.to()</code>.
      </p>
      <div className="flex flex-wrap gap-2 mt-8 w-full sm:w-auto"></div>
      {Object.entries(COLORS).map(([name, className]) => (
        <button
          key={name}
          className={`w-8 h-8 cursor-pointer rounded-full border-2 border-white shadow ${className} focus:outline-none`}
          title={name}
          onClick={() => toggleCarColor(name as CarColorType)}
        />
      ))}

      <CarSimulation carColor={carColor} />

      {/* Remplace CarSimulation par une "Moto" stylisée */}
      <MotoSimulation motoColor={carColor} />
    </div>
  );
};

export default VehiculePage;
