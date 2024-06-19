import React from "react";
import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  const { a, b } = useParams<{ a: string; b: string }>();

  // Ensure a and b are defined and convert them to numbers
  const numA = a ? parseInt(a) : 0;
  const numB = b ? parseInt(b) : 0;

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {numA + numB}
    </div>
  );
}
