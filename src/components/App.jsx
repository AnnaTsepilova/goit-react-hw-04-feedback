import React, { useState } from 'react';
import { CounterContainer, Title, StatisticsWrapper } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good * 100) / total);

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
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={positivePercentage}
            />
          )}
        </Section>
      </StatisticsWrapper>
    </CounterContainer>
  );
}
