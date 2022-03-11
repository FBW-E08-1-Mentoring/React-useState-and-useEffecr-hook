
import React, { useState ,useEffect } from 'react';
import Timer from './Timer';

function App() {
const [showTimer,setShowTimer]=useState(true)

/*   const [users,setUsers]=useState([]) */
//mounting phase .... 
//updating phase  ....
//unmount phase

//onload
/* useEffect(()=>{
  console.log("render ....")
  getAllUsers()
},[]) */

/*   const getAllUsers=()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=>{
     setUsers(result.data)
    })
  } */

  return (
    <div className="App">
      <h1>useState and useEffect Hooks</h1>
    {/*   {showTimer ? <Timer/> : null  }   */}

      {showTimer && <Timer/>}
      <button onClick={()=>setShowTimer(!showTimer)}>show timer / hide timer</button>



     {/*  <h1>Random Users</h1>
      <button onClick={getAllUsers}>get 6 random users</button>
      <section>
        {users.map(user=>{
          return(
            <div key={user.id}>
              <img src={user.avatar} alt="" width="200"/>
              <h2>{user.first_name}</h2>
              <p>{user.email}</p>
            </div>
          )
        })}
      </section> */}
    </div>
  );
}

export default App;