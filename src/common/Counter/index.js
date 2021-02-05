import React, { useEffect, useState } from "react";

import { format } from "../../utils/helper";

const ANIMATION_TIME = 900;
const REFRESH_RATE = 50;

const Count = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = count;
    const positive = start > end ? false : true;
    const step = Math.round((end - start) / (ANIMATION_TIME / REFRESH_RATE));

    let interval = setInterval(() => {
      start += step;
      setCount(start);

      if ((positive && start >= end) || (!positive && start <= end)) {
        setCount(end);
        clearInterval(interval);
      }
    }, REFRESH_RATE);

    //eslint-disable-next-line
  }, [end]);

  return <>{format(count)}</>;
};

export default Count;
