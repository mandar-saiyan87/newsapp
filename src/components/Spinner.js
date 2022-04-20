import React from "react";
import loading from "./spinner-2.gif";

export default function Spinner() {
  return (
    <div className="text-center my-4">
      <img style={{ width: "40px" }} src={loading} alt="" />
    </div>
  )
};
