import React, { useState} from 'react'
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, UserAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:userName, age:UserAge, id: Math.random().toString()}
      ];
    });
  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
 
export default App;
