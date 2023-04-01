import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.statisticItem}>Good: {good}</p>
      <p className={css.statisticItem}>Neutral: {neutral}</p>
      <p className={css.statisticItem}>Bad: {bad}</p>
      <p className={css.statisticItem}>Total: {total}</p>
      <p className={css.statisticItem}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
