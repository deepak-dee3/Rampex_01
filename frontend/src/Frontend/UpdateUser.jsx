import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const {id} = useParams();
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

  const updateuser = (e) => {
    e.preventDefault();

    axios.put(`https://rampex-deployment-2.onrender.com/api/user/update/${id}`,{name,email,address})
  }

  //  const deleteUser = (id) => {
  //        // axios.delete(`http://localhost:3000/api/user/deleteUser/${id}`)
  //        axios.delete(`https://rampex-deployment-2.onrender.com/api/user/deleteUser/${id}`)
  //         .then(result=>{
  //             console.log("user deleted")
  //         }).catch(err=>{console.log(err)})
  //     }

  return (
    <>
    <div>UpdateUser</div>

    <form onSubmit={updateuser}>
        <label for="email">Email</label>
        <input type="email" name="email" id ="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
        <label for="name">Name</label>
        <input type="text" name="name" id ="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input><br/>
        <label for="address">Address</label>
        <input type="text" name="address" id ="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}></input><br/>

        <button onSubmit="submit">Update</button>

    </form>

    </>
  )
}

export default UpdateUser