import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Container } from './App.styled';
import { Profile } from '../components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistoryList } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {

return (
  <Container>
    <Profile
      username={users.username}
      tag={users.tag}
      location={users.location}
      avatar={users.avatar}
      stats={users.stats}
  />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistoryList transactions={transactions} />
  </Container>
)

    
};


