import { useState } from "react";
import { IUser } from "./@types/types";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { History } from "./components/History/History";
import './style.css'

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      <div className="app">
        <SearchForm />
        <div className="content-wrapper">
          <div className="content">
            <History />
            <SearchResults />
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}
