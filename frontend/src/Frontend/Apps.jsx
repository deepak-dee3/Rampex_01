import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User";

const Apps = () =>{

    return (
        <>
        <h1>Apps</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/CreateUser" element={<CreateUser/>}/>
          <Route path ="/UpdateUser/:id" element={<UpdateUser/>}/>
          <Route path="/User/:id" element={<User/>}/>
          <Route path="/User" element={<User/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );

}

export default Apps;