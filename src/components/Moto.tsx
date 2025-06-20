import type { CarColorType } from "../utils/type";
import { COLORS } from "../utils/constants";

const MotoSimulation = ({ motoColor }: { motoColor: CarColorType }) => {
  return (
    <div id={`${motoColor}-moto`} className="flex flex-col  mt-12">
      {/* Corps de la moto */}
      <div
        className={`w-32 h-8 ${COLORS[motoColor]} rounded-full relative`}
        style={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Guidon */}
        <div
          className="absolute -top-2 left-2 w-6 h-1 bg-gray-700 rounded"
          style={{ transform: "rotate(-20deg)" }}
        />
        {/* Selle */}
        <div className="absolute top-1 left-16 w-8 h-3 bg-black rounded" />
      </div>
      {/* Roues */}
      <div className="flex justify-between w-32 mt-2">
        <div className="w-8 h-8 bg-black rounded-full border-4 border-gray-400" />
        <div className="w-8 h-8 bg-black rounded-full border-4 border-gray-400" />
      </div>
    </div>
  );
};

export default MotoSimulation;
