// import './App.css';
import React, { useState } from 'react';
import FeedbackSection from './components/FeedbackSection';

const App = () => {
  const { good, setGood } = useState(0);
  const { neutral, setNeutral } = useState(0);
  const { bad, setBad } = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(good + 1);
  };
  const increaseBad = () => {
    setBad(good + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => ((good / countTotalFeedback()) * 100).toFixed(2);

  return (
    <div className="App">
      <FeedbackSection
        increaseGood={increaseGood}
        increaseNeutral={increaseNeutral}
        increaseBad={increaseBad}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
