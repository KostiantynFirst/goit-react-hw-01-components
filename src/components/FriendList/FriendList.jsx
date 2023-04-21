import PropTypes from 'prop-types';
import { Friends } from "./FriendList.styled"
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
    return <Friends>
        {friends.map(({avatar, name, isOnline}) => (
        <FriendListItem key={name} name={name} avatar={avatar} isOnline={isOnline} />
        ))}
    </Friends>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )

}