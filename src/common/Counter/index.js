import React, { useEffect, useState } from "react";
import {format} from "../../utils/"

const totalAnimationTime = 1000;
const refreshRate = 100;

const Count = ({end}) => {

  // number displayed by component
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    let start = count;
    // if zero, return
    console.log(start,end)
    let positive=true;
    if (start>end) positive=false;
    const step =(end-start)/(totalAnimationTime/refreshRate);
    

    let timer = setInterval(() => {
      start += step;
      setCount(start);
      if ((positive && start >= end)|| (!positive && start<=end)) {setCount(end);clearInterval(timer);}
    }, refreshRate);
    
}, [end]);

  return (
      <>{format(count)}</>
  );
};

export default Count;
