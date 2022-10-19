import PropTypes from 'prop-types';
import { Table, Thead, Td, Tr } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <Tr key={id} index={index}>
                        <Td>{type[0].toUpperCase() + type.slice(1)}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                </Tr>
                ))}
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};