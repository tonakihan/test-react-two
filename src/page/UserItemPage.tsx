import { FC, useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import UserItem from "../components/UserItem";
import { IUser } from "../components/types/Types";
import axios from "axios";

interface UserItemPageParams extends Params {
  id: string;
}

const UserItemPage:FC = () => {
  const URL1: string = "https://jsonplaceholder.typicode.com/users";

  const params = useParams<UserItemPageParams>();
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    fetchUsers();
  })

  async function fetchUsers() {
    try {
      console.log(params)
      const res = await axios.get<IUser>(URL1 + '/' + params.id);
      setUser(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return(
    <div>
      {user 
      ? <UserItem user={user}/>
      :<h1>Ожидаю данные...</h1>}
    </div>
  )
}

export default UserItemPage;