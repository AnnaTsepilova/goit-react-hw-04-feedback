import PropTypes from 'prop-types';
import {
  FeedbackOptionsWrapper,
  GoodButton,
  NeutralButton,
  BadButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const components = {
  good: GoodButton,
  neutral: NeutralButton,
  bad: BadButton,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      {options.map((option, key) => {
        let Button = components[option];
        return (
          <Button
            type="button"
            key={key}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </FeedbackOptionsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
