import {FC, PropsWithChildren} from "react";
import {IUser} from "./types/Types";
import UserItem from "./UserItem";

interface UserListProps extends PropsWithChildren {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
  
  return(
    <div>
      {users.map(user => 
        <UserItem key={user.id} user={user}/>
      )}
    </div>
  )
}

export default UserList;