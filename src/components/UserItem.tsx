import {FC} from "react";
import {IUser} from "./types/Types";

interface UserItemProps {
  user: IUser,
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return(
    <div>
      <div style={{padding:15, border: '1px solid #49178a'}}>
        {user.id}. {user.name} проживает в городе {user.address.city} 
        на улице {user.address.street}
      </div>
    </div>
  )
}

export default UserItem;