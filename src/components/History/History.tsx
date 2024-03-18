import { useContext } from "react";
import { SearchContext } from "../SearchResults/SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./styles.css";
import { MockinContextType } from "../../@types/types";

export function History() {
  const usersContext = useContext<MockinContextType>(SearchContext);

  return (
    <div className="history">
      <div className="header">
        <h3>History</h3>
      </div>
      <div className="usersList">
        {
          usersContext?.users.length <= 0
          ?
          <a>Such empty...</a>
          :
          usersContext?.users?.map((val, index) => (
            <UserCard key={index} user={usersContext?.users[usersContext?.users.length - index - 1]} />
          ))
        }
      </div>
    </div>
  );
}
