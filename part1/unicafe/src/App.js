import { useState } from "react";

import "./App.module.css";

//components
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => setGood((prevGood) => prevGood + 1);
  const handleNeutralButton = () =>
    setNeutral((prevNeutral) => prevNeutral + 1);
  const handleBadButton = () => setBad((prevBad) => prevBad + 1);

  return (
    <>
      <h2>Give feedback</h2>
      <Button text="good" onClick={handleGoodButton} />
      <Button text="neutral" onClick={handleNeutralButton} />
      <Button text="bad" onClick={handleBadButton} />

      <Statistics title="statistics" data={{ good, neutral, bad }} />
    </>
  );
};

export default App;
