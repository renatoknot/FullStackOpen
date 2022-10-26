import React from "react";

import "./StatisticLine.module.css";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
