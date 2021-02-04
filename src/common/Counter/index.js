import React, { useEffect, useState } from "react";

import { format } from "../../utils/helper";

const totalAnimationTime = 900;
const refreshRate = 50;

const Count = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = count;
    const positive = start > end ? false : true;
    const step = Math.round((end - start) / (totalAnimationTime / refreshRate));

    let interval = setInterval(() => {
      start += step;
      setCount(start);

      if ((positive && start >= end) || (!positive && start <= end)) {
        setCount(end);
        clearInterval(interval);
      }
    }, refreshRate);

    //eslint-disable-next-line
  }, [end]);

  return <>{format(count)}</>;
};

export default Count;
