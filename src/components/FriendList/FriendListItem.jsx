import PropTypes from 'prop-types';
import { SpanOnline, SpanOffline, Cart, Name } from './styles';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Cart>
      {isOnline ? <SpanOnline /> : <SpanOffline />}
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Cart>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
