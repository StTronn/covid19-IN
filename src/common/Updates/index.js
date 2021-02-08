import React, { useState, useEffect } from "react";
import "./updates.css";

const Update = () => {
  const [updates, setUpdates] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch(
          "https://api.covid19india.org/updatelog/log.json"
        );
        const data = await res.json();
        console.log();
        setUpdates(data[0].update.split("\n"));
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchUpdates();
  }, []);
  if (error) return <>No Data...</>;
  return (
    <>
      <div className="updateTitle">Updates</div>
      {updates
        .slice(0, 6)
        .map((item) => (item ? <UpdateItem update={item} /> : <></>))}
    </>
  );
};

const UpdateItem = ({ update }) => {
  return (
    <div className={"menuItemDetails card menuItemSelectedDetails"}>
      {update}
    </div>
  );
};

export default Update;
