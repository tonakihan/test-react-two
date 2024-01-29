import {useEffect, useState} from 'react';
import Card, {CardVariant} from './components/Cards';
import {IUser} from './components/types/Types';
import axios from 'axios';
//import UserList from "./components/UserList";
import UserItem from './components/UserItem';
import List from './components/List';

const URL: string = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(URL);
      setUsers(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card 
        variant={CardVariant.primary} 
        height='200px' width='100px' 
        onClick={() => {alert("БУ!")}}
      >
        КОТ
      </Card>
      <List 
        items={users} 
        renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
      />
    </div>
  );
}

export default App;
