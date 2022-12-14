import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
<List>
            {friends.map(friend => 
                <FriendListItem key={friend.id} friend={friend} />
    )}
</List>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
};