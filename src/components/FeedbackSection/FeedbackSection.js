import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackSection.module.css';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const FeedbackSection = ({
  increaseValue,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => (
  <Section title="Please, leave your feedback here:">
    <FeedbackOptions increaseValue={increaseValue} options={['good', 'neutral', 'bad']} />
    <h2 className={styles.subtitle}>Statistics</h2>
    {countTotalFeedback() === 0 ? (
      <Notification message="No feedback given"></Notification>
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        percentage={countPositiveFeedbackPercentage}
      />
    )}
  </Section>
);

FeedbackSection.propTypes = {
  increaseValue: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackSection;
