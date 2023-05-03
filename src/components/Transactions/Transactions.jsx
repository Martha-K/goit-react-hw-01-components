import PropTypes from 'prop-types';
import { Table, Line, Head, TableCell } from './styles';


export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <Line>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </Line>
      </Head>

      <tbody>
        {items.map(el => (
          <Line key={el.id}>
            <TableCell>{el.type}</TableCell>
            <TableCell>{el.amount}</TableCell>
            <TableCell>{el.currency}</TableCell>
          </Line>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items:  PropTypes.array.isRequired
}