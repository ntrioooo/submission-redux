import React from "react";
import PoundCard from "./PoundCard";

function PoundList({ pounds }) {
  return (
    <div className="mt-5 justify-center flex-col">
      {pounds.map((pound) => (
        <PoundCard key={pound.id} {...pound} />
      ))}
    </div>
  );
}

export default PoundList;
