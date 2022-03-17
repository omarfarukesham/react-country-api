function UsersInfo(){
  const [count, setCount] = useState(55)
  // const increaseCount = () =>{
  //   const newCount = count+1 
  //   setCount(newCount)
  // }
  // const decreaseCount = () => setCount(count-1)
  // const increaseCount = () => setCount(count+1)

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount} type='button'>Increase</button>
      <button onClick={decreaseCount} type='button'>Decrease</button>
    </div>
  )
}

// data fetch 
import { useEffect, useState } from "react";

function App() {

  return (
    <div>
       <UsersInfo></UsersInfo>
    </div>

  )
}

function UsersInfo(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUsers(data))

  },[])

  return (
    <div>
        <h1>Users :{users.length}</h1>
        {
          users.map(user => usersDetails(user))
        }
    </div>
  )
}

function usersDetails(props){
  return(
    <div className="info">
     <h1>UserName: {props.name}</h1>
      <p></p>
     <p>UserEmail: {props.email}</p>
     
    </div>
  )
}