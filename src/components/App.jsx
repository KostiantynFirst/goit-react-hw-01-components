
import users from '../user.json';
import { Profile } from './Profile/Profile'

export const App = () => {
  return (
    Profile(users)
  );
};
