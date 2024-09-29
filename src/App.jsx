import { useState, useEffect } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import Options from './components/Options/Options';


function App() {

    const getInitialFeedback = () => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    };

    const [feedback, setFeedback] = useState(getInitialFeedback());

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    const updateFeedback = (feedbackType) => {
        setFeedback((prevState) => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };
 
  return (
    <>
          <Description />
          <Options
              isFeedbackEmpty = {totalFeedback}
              onUpdateFeedback={updateFeedback}
              onResetFeedback={resetFeedback}
          />
          {totalFeedback != 0 ? <Feedback
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positive={positiveFeedback}
          />
              : <Notification />}
    </>
  )
}

export default App;
