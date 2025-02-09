import React from 'react'
import { Link } from 'react-router-dom'
import { useState  , useEffect} from 'react'
//import UpdateUser from './UpdateUser'
import axios from 'axios';
import './User.css';



const User = () => {

    const [user,setuser] = useState([

        {
            name:"deepak",email:"deepak@gmail.com",address:"chennai"
        }
    ]);

    useEffect(()=>{
        axios.get('https://rampex-deployment-2.onrender.com/api/user/fetch').then(result=>{

            //setuser(result.data);http://localhost:3000
            setuser(result.data.users);
        }).catch(err=>{
            console.log(err)
        })
    },[]) 

   


  return (
    <>
   
    <h1>User</h1>
    <Link to = "/CreateUser">Create user</Link>
    <table>
        <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>Actions</th>
        </tr>
       {
        user.map((users)=>(
            <tr>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                <td>
                <Link to = {`/update/$usem._id`} >update user</Link>
                {/* <Link to = "/delete">delete user</Link> */}
                <button onClick={(e)=>{deleteUser}}>Delete</button>
                </td>
            </tr>
        ))
       }
    </table>
    </>
  )
}

export default User