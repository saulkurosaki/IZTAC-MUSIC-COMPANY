import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useWindowSize = () => {
  // Initialize state with the width/height to 0 so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    // window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    // handleResize();

    // Remove event listener on cleanup
    // return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
