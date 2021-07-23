import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ increaseValue, options }) => (
  <div className={styles.btnWrapper}>
    {options.map((option, index) => (
      <button key={index} className={styles.btn} type="button" onClick={increaseValue[option]}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  increaseValue: PropTypes.exact({
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
  }),
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
