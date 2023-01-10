import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CounterContainer, Title, StatisticsWrapper } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = totalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);

        break;
      case 'neutral':
        setNeutral(neutral + 1);

        break;
      case 'bad':
        setBad(bad + 1);

        break;

      default:
        break;
    }
  };

  return (
    <CounterContainer>
      <Title>Please leave feedback</Title>
      <Section>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <StatisticsWrapper>
        <Section title="Statistics">
          {totalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              percentage={positivePercentage()}
            />
          )}
        </Section>
      </StatisticsWrapper>
    </CounterContainer>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.func,
  positivePercentage: PropTypes.func,
  onLeaveFeedback: PropTypes.func,
};
