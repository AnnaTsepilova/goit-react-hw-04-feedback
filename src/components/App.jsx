import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CounterContainer, Title, StatisticsWrapper } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / total
    );
    return positiveFeedbackPercentage;
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      const value = prevState[option];
      return {
        [option]: value + 1,
      };
    });
  };

  render() {
    return (
      <CounterContainer>
        <Title>Please leave feedback</Title>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <StatisticsWrapper>
          <Section title="Statistics">
            {!this.countTotalFeedback() ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                percentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </StatisticsWrapper>
      </CounterContainer>
    );
  }
}

export default App;
