import PropTypes from 'prop-types'; 
import { ProfileCard } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileCard>
  <div>
    <img
      src={avatar}
      alt={username}
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>{(Object.keys(stats))[0]}</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>{(Object.keys(stats))[1]}</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>{(Object.keys(stats))[2]}</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
    </ProfileCard>
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}