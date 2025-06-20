import { COLORS } from "../utils/constants";
import type { CarColorType } from "../utils/type";

const CarSimulation = ({ carColor }: { carColor: CarColorType }) => {
  return (
    <div className="mt-20 flex items-end h-40">
      <div id={`${carColor}-car`} className="flex flex-col items-center">
        {/* Car body */}
        <div
          className={`w-32 h-10 ${COLORS[carColor]} rounded-t-lg relative z-10`}
        />
        {/* Car roof */}
        <div className="w-16 h-6 bg-gray-200 rounded-t-md -mt-4 z-20" />
        {/* Wheels */}
        <div className="flex justify-between w-32 -mt-2">
          <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700" />
          <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default CarSimulation;
