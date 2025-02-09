import React from "react";
import { BrowserRouter, Route, Routes,Link} from "react-router-dom";
import { CreateUser } from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User";

const Apps = () =>{

  // const navigate = useNavigate(); // Hook to navigate programmatically

  // const goToCreateUser = () => {
  //   navigate("/CreateUser");
  // };


    return (
        <>
        <h1>Apps</h1>
        {/* <button>
          <Link to="/CreateUser">Go to Create User</Link>
        </button> */}
        
        {/* <button onClick={goToCreateUser}>Go to Create User</button> */}
        <BrowserRouter>
        <Routes>
          <Route path="/CreateUser" element={<CreateUser/>}/>
          <Route path ="/UpdateUser/:id" element={<UpdateUser/>}/>
          <Route path="/User/:id" element={<User/>}/>
          <Route path="/" element={<User/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );

}

export default Apps;