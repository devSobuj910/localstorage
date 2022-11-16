import React, { useEffect, useState } from "react";
import Shoz from "../Shoz";
import "./Szes.css";
const Shozes = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);

  return (
    <div className="grid">
      {show.map((data) => (
        <Shoz key={data.id} data={data}></Shoz>
      ))}
    </div>
  );
};

export default Shozes;
