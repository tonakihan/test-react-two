import {FC, useEffect, useState} from "react";
import {IUser} from "../components/types/Types";
import axios from "axios";
import List from "../components/List";
import UserItem from "../components/UserItem";

const Users:FC = () => {
  const URL1: string = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(URL1);
      setUsers(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return(
    <List 
        items={users} 
        renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
    />
  )
}

export default Users;