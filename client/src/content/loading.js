import React from "react";
import image from "./img/loading.gif";

export default function loading() {
  return (
    <div>
      <img src={image} alt={image} style={{ width: "80vw" }} />
      <h1>Loading...</h1>
    </div>
  );
}
