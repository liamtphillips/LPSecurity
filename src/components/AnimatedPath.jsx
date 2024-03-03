import { useState, useEffect } from 'react';

const ReusableSvgScrollAnimation = ({ svgPathId, scrollMultiplier }) => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const svgPath = document.getElementById(svgPathId);
    const pathLength = svgPath.getTotalLength();
    setLength(pathLength);

    svgPath.style.strokeDasharray = pathLength;
    svgPath.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const draw = pathLength * scrollPercent * scrollMultiplier;
      svgPath.style.strokeDashoffset = pathLength - draw;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [length, svgPathId, scrollMultiplier]);

  return null; 
};

export default ReusableSvgScrollAnimation;