import styled from "styled-components";

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`

export const FriendsStatus = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${({isOnline}) => {
        console.log(isOnline);
        switch (isOnline) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return 'white';
        }
    }};
    

`
export const FriendsAvatar = styled.img`
    border-radius: 50%;
    margin-right: 10px;
`
export const FriendsName = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
`