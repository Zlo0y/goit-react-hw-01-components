import PropTypes from 'prop-types';
import { Box } from '../../constants';
import {Title, StatsList, Item, Label, Percentage} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <Box width={4} mt={6} bg="bg" mr={0} ml={0} boxShadow='normal' borderRadius='normal'>
            {title && <Title>{ title }</Title>}

            <StatsList>
                {stats.map(({ id, label, percentage }) => (
                <Item key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </Item>
                ))}

            </StatsList>
        </Box>
    )
    
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired,
};

