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

