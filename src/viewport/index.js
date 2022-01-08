import React, { useContext } from "react";
import { ViewportContext } from "./ViewportProvider";

const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  const isMobile = width < 500;
  const isTablet = width < 1000;
//   const isDesktop = width > 1120;
  return { width, height, isMobile, isTablet };
};

export default useViewport;