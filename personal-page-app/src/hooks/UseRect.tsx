import { useState, useEffect } from 'react';

const UseRect = () => {
  const [fullScreenWidth, setFullScreenWidth] = useState(window.innerWidth);
  const [halfScreenWidth, setHalfScreenWidth] = useState(window.innerWidth / 2);
  const [fullScreenHeight, setFullScreenHeight] = useState(window.innerHeight);
  const [halfScreenHeight, setHalfScreenHeight] = useState(window.innerHeight / 2);

  const allPropeties = {
    fullScreenHeight,
    fullScreenWidth,
    halfScreenHeight,
    halfScreenWidth,
  }

  const updateHalfScreen = () => {
    setHalfScreenWidth(window.innerWidth / 2);
    setHalfScreenHeight(window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('resize', updateHalfScreen);

    return () => {
      window.removeEventListener('resize', updateHalfScreen);
    };
  }, []);

  return allPropeties;
};


export default UseRect;
