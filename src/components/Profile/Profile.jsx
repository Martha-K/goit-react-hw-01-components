import PropTypes from 'prop-types';
import {
  Container,
  Image,
  Name,
  Location,
  Cart,
  Followers,
  Stats,
  List,
} from './styles';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <Location>{location}</Location>
      </div>

      <List>
        <Cart>
          <Followers>Followers</Followers>
          <Stats>{stats.followers}</Stats>
        </Cart>
        <Cart>
          <Followers>Views</Followers>
          <Stats>{stats.views}</Stats>
        </Cart>
        <Cart>
          <Followers>Likes</Followers>
          <Stats>{stats.likes}</Stats>
        </Cart>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

