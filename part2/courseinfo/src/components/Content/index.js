import React from "react";

import "./styles.module.css";

import Part from "../Part";

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ul>
      <p>
        <strong>Total of {total} exercises</strong>
      </p>
    </>
  );
};

export default Content;
