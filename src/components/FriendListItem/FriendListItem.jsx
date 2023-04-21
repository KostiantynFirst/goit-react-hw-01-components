import { FriendsItem, FriendsStatus, FriendsAvatar, FriendsName } from "./FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <FriendsItem>
                <FriendsStatus isOnline={isOnline}></FriendsStatus>
                <FriendsAvatar src={avatar} alt={name} width="48"/>
                <FriendsName>{name}</FriendsName>
            </FriendsItem>
}