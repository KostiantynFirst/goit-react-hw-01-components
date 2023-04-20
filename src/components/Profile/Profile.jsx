import PropTypes from 'prop-types'; 
import { ProfileCard, Avatar, CardName, CardTag, CardLocation, CardStats, CardElement, CardLabel, CardQuantity } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileCard>
  {/* <div> */}
    <Avatar
      src={avatar}
      alt={username}
    />
    <CardName>{username}</CardName>
    <CardTag>{tag}</CardTag>
    <CardLocation>{location}</CardLocation>
  {/* </div> */}

  <CardStats>
    <CardElement>
      <CardLabel>{(Object.keys(stats))[0]}</CardLabel>
      <CardQuantity>{stats.followers}</CardQuantity>
    </CardElement>
    <CardElement>
      <CardLabel>{(Object.keys(stats))[1]}</CardLabel>
      <CardQuantity>{stats.views}</CardQuantity>
    </CardElement>
    <CardElement>
      <CardLabel>{(Object.keys(stats))[2]}</CardLabel>
      <CardQuantity>{stats.likes}</CardQuantity>
    </CardElement>
  </CardStats>
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