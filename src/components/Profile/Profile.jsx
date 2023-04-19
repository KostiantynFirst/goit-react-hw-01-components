import PropTypes from 'prop-types'; 

export const Profile = ({username, tag, location, avatar, stats }) => {
    return <ProfileCard>
  <div>
    <img
      src={avatar}
      alt={tag}
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>{stats.followers}</span>
      <span>{stats.followers(0)}</span>
    </li>
    <li>
      <span>{stats.views}</span>
      <span>{stats.views(0)}</span>
    </li>
    <li>
      <span>{stats.likes}</span>
      <span>{stats.likes(0)}</span>
    </li>
  </ul>
    </ProfileCard>
}

Profile.PropTypes = {
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