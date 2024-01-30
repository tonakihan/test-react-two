import {useEffect, useState} from 'react';
import Card, {CardVariant} from './components/Cards';
import {ITodo, IUser} from './components/types/Types';
import axios from 'axios';
import UserItem from './components/UserItem';
import List from './components/List';
import TodoItem from './components/TodoItem';

const URL1: string = "https://jsonplaceholder.typicode.com/users";
const URL2: string = "https://jsonplaceholder.typicode.com/todos?_limit=10";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(URL1);
      setUsers(res.data);
    } catch (e) {
      alert(e);
    }
  }
  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>(URL2);
      setTodos(res.data);
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
      <List 
        items={todos} 
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
      />
    </div>
  );
}

export default App;
