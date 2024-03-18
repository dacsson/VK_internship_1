import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { MockinContextType } from "../../@types/types";

export function SearchResults() {
  const usersContext = useContext<MockinContextType>(SearchContext);

  return (
    <div className="results">
      <div className="header">
        <h3>Result</h3>
      </div>
      <div className="usersList">
        { 
          usersContext?.users?.length <= 0 
          ?
          <a>Such empty...</a>
          :
          <UserCard user={usersContext?.users[usersContext.users.length - 1]} /> }
      </div>
    </div>
  );
}
