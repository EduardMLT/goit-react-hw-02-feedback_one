import {
  TransactionTable,
  TableHeader,
  TableRow,
  TableTd
} from './TransactionsData.styles';

export const TransactionHistory = ({ transact }) => {
  
  return (
    <TransactionTable className="transaction-history">
      <TableHeader className="transaction-header">
        <tr>
          <TableTd>Type</TableTd>
          <TableTd>Amount</TableTd>
          <TableTd>Currency</TableTd>
        </tr>
      </TableHeader>

      <tbody>
        {transact.map((transactionsItem, index) => {
          const isEvenRow = index % 2 === 0;
          return (
            <TableRow
              key={transactionsItem.id}
              className="transaction-row"
              $iseven={isEvenRow}
            >
              <TableTd>{transactionsItem.type}</TableTd>
              <TableTd>{transactionsItem.amount}</TableTd>
              <TableTd>{transactionsItem.currency}</TableTd>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};