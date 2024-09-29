import React from 'react';
import PropTypes from 'prop-types';
import s from './Options.module.css'

const Options = ({ onUpdateFeedback, onResetFeedback, isFeedbackEmpty }) => (
    
    <div className={s.wrapper}>
        <button className={s.button} onClick={() => onUpdateFeedback('good')}>good</button>
        <button className={s.button} onClick={() => onUpdateFeedback('neutral')}>neutral</button>
        <button className={s.button} onClick={() => onUpdateFeedback('bad')}>bad</button>
        {isFeedbackEmpty != 0 ? <button onClick={onResetFeedback}>reset</button> : null}
    </div>
);

Options.propTypes = {
    onUpdateFeedback: PropTypes.func.isRequired,
    onResetFeedback: PropTypes.func.isRequired,
    isFeedbackEmpty: PropTypes.number,
};

export default Options;
