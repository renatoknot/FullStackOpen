import React from "react";

import "./style.module.css";

const MostVoted = ({ anecdotes, quantityVotes, indexMostVoted }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexMostVoted]}</p>
      <p>has {quantityVotes} votes</p>
    </>
  );
};

export default MostVoted;
