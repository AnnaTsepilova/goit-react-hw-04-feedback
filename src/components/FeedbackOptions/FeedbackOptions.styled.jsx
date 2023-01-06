import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  height: 40px;

  margin-left: auto;
  margin-right: auto;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: #fff;
  background-color: #54a5e7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
    color: #54a5e7;
  }
`;

export const GoodButton = styled(Button)`
  background-color: #4cceb2;
  &:hover {
    color: #4cceb2;
  }
`;

export const BadButton = styled(Button)`
  background-color: #fa5e4a;
  &:hover {
    color: #fa5e4a;
  }
`;

export const NeutralButton = styled(Button)``;
