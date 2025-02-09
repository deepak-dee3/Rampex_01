import React, { useState } from 'react';
import axios from 'axios';


export const CreateUser = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');

  const submit = (e) =>{

    e.preventDefault();
    
    axios.post('https://rampex-deployment-2.onrender.com/api/user/create', { name, email, address })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error("There was an error!", err);
    });


  }



  return (
    <>
    <div>CreateUser</div>

    <form onSubmit={submit}
    >
        <label>Email</label>
        <input onChange={(e)=>{setName(e.target.value)}}
         type="email" name="email" id ="email" /><br/>
        <label >Name</label>
        <input  onChange={(e)=>{setEmail(e.target.value)}}
         type="text" name="name" id ="name" /><br/>
        <label >Address</label>
        <input  onChange={(e)=>{setAddress(e.target.value)}}
         type="text" name="address" id ="address" /><br/>

        <button type="submit">Create</button>

    </form>
    </>

  )
}
