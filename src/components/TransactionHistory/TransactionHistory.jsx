import PropTypes from 'prop-types'; 
import { TransactionHistory, TableHeader, TableTr, TableTh, TableBody, TableBodyTr, TransactionHistoryTd  } from "./TransactionHistory.styled"

export const TransactionHistoryList = ({transactions}) => {
  return <TransactionHistory>
  <TableHeader>
    <TableTr>
      <TableTh>Type</TableTh>
      <TableTh>Amount</TableTh>
      <TableTh>Currency</TableTh>
    </TableTr>
  </TableHeader>

  <TableBody>
    {transactions.map(({id, type, amount, currency}) => {
        return (
        <TableBodyTr key={id}>
            <TransactionHistoryTd>{type}</TransactionHistoryTd>
            <TransactionHistoryTd>{amount}</TransactionHistoryTd>
            <TransactionHistoryTd>{currency}</TransactionHistoryTd>
        </TableBodyTr>
        )
    })
}
    </TableBody>
</TransactionHistory>

}

TransactionHistoryList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  )
}

