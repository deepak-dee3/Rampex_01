import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Component } from "react";
import { Link, Routes, Route, Router,BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

 
class NavBar extends Component{
    render(){
        return(
            <>
            
            
            <BrowserRouter>
                <div>
              <nav style={{ display: "flex",justifyContent:"space-between",backgroundColor: "#f4f4f4",position:"fixed",top:"0",width:"100%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
    <img 
      src="https://th.bing.com/th/id/OIP.zoXgy1dfZllUgLOR8Cbw8QHaHa?w=197&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
      alt="Logo" 
      style={{ height: "30px", marginRight: "10px" }} 
    />
    <span style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>
      ABC
    </span>
  </div>
                <ul style={{ display: "flex" , listStyle:"none",}}>
                    <li style={{margin:"0px 20px " }}><Link style={{textDecoration:"none" }} to={"/Home"}>Home</Link></li>
                    <li style={{margin:"0px 20px "}}><Link style={{textDecoration:"none"}} to={"/About"}>About</Link></li>
                    <li style={{margin:"0px 20px "}}><Link style={{textDecoration:"none"}} to={"/Contact"}>Contact</Link></li>
                </ul>
              </nav>
              
         
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            </div>
            </BrowserRouter>
            <Footer/>
            
            </>
            

           
           
        );
    }
}
export default NavBar;