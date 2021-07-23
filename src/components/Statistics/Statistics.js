import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className={styles.stats}>
    <li className={styles.statItem}>
      <span>
        Good: <span className={styles.number}>{good}</span>
      </span>
    </li>
    <li className={styles.statItem}>
      <span>
        Neutral: <span className={styles.number}>{neutral}</span>
      </span>
    </li>
    <li className={styles.statItem}>
      <span>
        Bad: <span className={styles.number}>{bad}</span>
      </span>
    </li>
    <li className={styles.statItem}>
      <span>
        Total: <span className={styles.number}>{total()}</span>
      </span>
    </li>
    <li className={styles.statItem}>
      <span>
        Positive feedback: <span className={styles.number}>{`${percentage()} %`}</span>
      </span>
    </li>
  </ul>
);

export default Statistics;
