import React from "react";
import "../component/shoze/Szes.css";
import { adtodb, removedata } from "../utilitis";
const Shoz = ({ data }) => {
  const { id, email, username } = data;

  const addTocart = (id) => {
    adtodb(id);
  };

  const remove = (id) => {
    removedata(id);
  };

  return (
    <div className="border">
      <h1>name: {username}</h1>
      <h3>email: {email}</h3>
      <h4>id: {id}</h4>
      <button onClick={() => addTocart(id)}>add to cart</button>
      <button onClick={() => remove(id)}> remov to cart</button>
    </div>
  );
};

export default Shoz;
