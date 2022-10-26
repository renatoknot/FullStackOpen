import React from "react";

import StatisticLine from "./StatisticLine ";

const Statistics = ({ title, data: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  const average = good > 0 || bad > 0 ? (good - bad) / total : 0;
  const positive = good > 0 ? (good / total) * 100 + " %" : "0 %";

  if (total === 0) {
    return (
      <>
        <h2>{title}</h2>
        <p>No feedback given.</p>
      </>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
