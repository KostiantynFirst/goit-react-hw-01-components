import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import { Profile } from '../components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {

return (
  <>
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
  </>
  
)

    
};


