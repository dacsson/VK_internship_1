import { useContext, useState, useEffect } from "react";
import { IUser, MockinContextType } from "../../@types/types";
import { SearchContext } from "../SearchResults/SearchContext";
import { ModalError } from "../Modal/Error";
import "./styles.css";

export function SearchForm() {
  
  const { users, setUsers } = useContext<MockinContextType>(SearchContext);
  const [query, setQuery] = useState<string>("")
  const [searchError, setSearchError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  // Type casting JSON obj to User type
  function fromJSONtoUser(obj: any) : Promise<IUser> {
    return new Promise<IUser>((res, rej) => {
      if(!obj) { rej(`0 users with name: \"${query}\"`) }
      res(
        {
        id: obj.id,
        age: obj.age,
        first_name: obj.firstName,
        last_name: obj.lastName,
        email: obj.email,
        image: obj.image,
        uname: obj.username
        }
      )
    })
  }

  function includesUser(array: IUser[], user: IUser) : boolean
  {
    for(let el in array)
    {
      if (el.uname === user.uname) return true;
    }
    
    return false;
  }

  function indexOfUser(array: IUser[], user: IUser) : number
  {
    for(let i = 0; i < array.length; i++)
    {
      if (array[i].uname === user.uname) return i;
    }
    
    return -1;
  }

  const handleSearch = () => {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
    .then(
      res => res.json()
    )
    .then(
      data => fromJSONtoUser(data.users[0])
    )
    .then(
      user => { 
        // DOESNT WORK :C
        let users_cpy = [...users] 
        if(includesUser(users_cpy, user)) {
          let temp = users_cpy[indexOfUser(users_cpy, user)]
          users_cpy[indexOfUser(users_cpy, user)] = users_cpy[0]
          users_cpy[0] = temp
          console.log("swapped", user.first_namem, user.uname)
        }
        else {
          users_cpy.push(user)
        }
        setUsers(users_cpy)
      }
    )
    .catch(
      msg => { setSearchError(msg); setShowModal(true) }
    )

    setShowModal(false);
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input id= "name" type="text" placeholder="Terry" onChange={(e) => { setQuery(e.target.value)}}/>

        <button onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      {
        showModal
        &&
        <ModalError msg={searchError} setShowModal={setShowModal}/>
      }
    </div>
  );
}
