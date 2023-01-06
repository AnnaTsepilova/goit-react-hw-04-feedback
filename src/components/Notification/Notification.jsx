import PropTypes from 'prop-types';
import { Text } from 'components/Statistics/Statistics.styled';

export default function Notification({ message }) {
  return <>{message && <Text>{message}</Text>}</>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
