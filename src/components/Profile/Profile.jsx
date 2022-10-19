import PropTypes from 'prop-types';
import { Box } from '../../constants';
import { Avatar, Name, TagAndLocation, Stats, StatElem, Label, Quantity } from './Profile.styled';


export const Profile = ({ profile: { username, tag, location, avatar, stats } }) => {
    return (
        <Box width={3} height={0} mt={6} mr={0} ml={0} boxShadow='normal' borderRadius='normal'>
            <Box display= 'flex' flexDirection= 'column' justifyContent= 'center' alignItems= 'center' p={5}>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <Name>{username}</Name>
                <TagAndLocation>@{tag}</TagAndLocation>
                <TagAndLocation>{location}</TagAndLocation>
            </Box>

            <Stats>
                <StatElem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers.toLocaleString('en-US')}</Quantity>
                </StatElem>
                <StatElem>
                    <Label>Views</Label>
                    <Quantity>{stats.views.toLocaleString('en-US')}</Quantity>
                </StatElem>
                <StatElem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes.toLocaleString('en-US')}</Quantity>
                </StatElem>
            </Stats>
        </Box>
    )
};

Profile.propTypes = {
    profile: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        stats: PropTypes.exact({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    })
};