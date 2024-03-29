import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const generateClipPathTopStyle = (mediaQuery: number) => {
  if (mediaQuery <= 768) {
    return "polygon(0 0, 100% 0, 100% 28%, 0 58%)";
  } else if (mediaQuery <= 1024) {
    return "polygon(0 0, 100% 0, 100% 22%, 0 62%)";
  } else if (mediaQuery <= 1280) {
    return "polygon(0 0, 100% 0, 100% 19%, 0 66%)";
  } else if (mediaQuery <= 1536) {
    return "polygon(0 0, 100% 0, 100% 14%, 0 71%)";
  } else {
    return "polygon(0 0, 100% 0, 100% 0, 0 100%)";
  }
};

export const generateClipPathBottomStyle = (mediaQuery: number) => {
  if (mediaQuery <= 768) {
    return "polygon(0 52%, 100% 83%, 100% 100%, 0 100%)";
  } else if (mediaQuery <= 1024) {
    return "polygon(0 28%, 100% 69%, 100% 100%, 0 100%)";
  } else if (mediaQuery <= 1280) {
    return "polygon(0 31%, 100% 82%, 100% 100%, 0 100%)";
  } else if (mediaQuery <= 1536) {
    return "polygon(0 26%, 100% 87%, 100% 100%, 0 100%)";
  } else {
    return "polygon(0 0, 100% 100%, 100% 100%, 0 100%)";
  }
};
