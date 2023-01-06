import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding-bottom: ${props => props.theme.space[6]}px;
`;

export const StatisticsItem = styled.li`
  display: flex;
`;

export const Text = styled.p`
  margin-right: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
`;

export const CounterValue = styled(Text)``;
