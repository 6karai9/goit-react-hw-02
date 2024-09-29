import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ good, neutral, bad, total, positive }) => (
    <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        <div>Positive: {positive}%</div>
    </div>
);

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};

export default Feedback;
