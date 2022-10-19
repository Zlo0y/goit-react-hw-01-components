import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
};