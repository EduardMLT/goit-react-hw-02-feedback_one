import { Profile } from './Profile/ProfileData';
import dataProfile from '../data/user.json';
import { Statistics } from './Statistics/StatisticsData';
import data from '../data/data.json';
import { FriendList } from './Friend/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './Transactions/TransactionsData';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile data={dataProfile} />
      <Statistics stats={data} />
      <FriendList stats={friends} />
      <TransactionHistory transact={transactions} />
    </div>
  );
};
