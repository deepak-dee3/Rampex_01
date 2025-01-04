import React, { useState } from 'react';
import axios from 'axios';


export const CreateUser = () => {

  // const [formdata,setFormdata] = useState(
  //   {
  //     name:'',
  //     email:'',
  //     address:'',
  //   }
  // )

  // const handleChange = (e) => {

  //   // const { name, value } = e.target;

    
  //   // setFormdata({ ...formdata, [name]: value });
  //   const { name, value } = e.target; // Destructure name and value from input
  //   setFormData({ ...formData, [name]: value }); 

  // }
  // const handleSubmit = (e) =>{

  //   e.preventDefault();

  //   axios.post('http://localhost:3000/api/user/create',formdata);
  //   alert('User created successfully!');


  // }


  return (
    <>
    <div>CreateUser</div>

    <form onSubmit={handleSubmit}>
        <label For="email">Email</label>
        <input //onChange={handleChange} value={formdata.email}
         type="email" name="email" id ="email" /><br/>
        <label For="name">Name</label>
        <input //onChange ={handleChange} value={formdata.name}
         type="text" name="name" id ="name" /><br/>
        <label For="address">Address</label>
        <input // onChange={handleChange} value={formdata.address}
         type="text" name="address" id ="address" /><br/>

        <button type="submit">Create</button>

    </form>
    </>

  )
}
