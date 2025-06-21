import { useGSAP } from "@gsap/react";
import { useRef, type Dispatch, type SetStateAction } from "react";
import gsap from "gsap";

const TestTube = ({
  started,
  isPositive,
//   setIsPositive,
}: {
  started: boolean;
  isPositive: boolean;
  setIsPositive?: Dispatch<SetStateAction<boolean>>;
}) => {
  const liquidRef = useRef(null);

  useGSAP(() => {
    if (started) {
      gsap.to(liquidRef.current, {
        backgroundColor: isPositive ? "#dc2626" : "#3b82f6",
        duration: 3,
        delay: 3,
      });
    }
  }, [started, isPositive]);

  return (
    <div className="relative h-72 w-24 bg-white rounded-b-full border-4 border-gray-300 overflow-hidden">
      <div
        ref={liquidRef}
        className={`absolute bottom-${
        //   isPositive ? 0 : 0
        0
        } w-full h-3/4 bg-blue-500 rounded-t-full`}
      ></div>
    </div>
  );
};

export default TestTube;
