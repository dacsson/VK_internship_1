import { IUser } from "../../@types/types";
import "./style.css";

interface IUCardProps
{
  user: IUser
}

export function UserCard({user} : IUCardProps) {
  return (
    <div className="userCard">
      <img className="userPic" src={user.image} />
      <div className="userInfo">
        <div>{user.first_name} {user.last_name}</div>
        <div>{user.age} {user.email}</div>
      </div>
    </div>
  );
}
