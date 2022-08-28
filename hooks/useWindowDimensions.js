import { useState, useEffect } from 'react'

// https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    
      window.addEventListener("resize", handleResize)
     
      handleResize();

      return () => window.removeEventListener("resize", handleResize)
    }
  }, []) 
  return windowSize
}