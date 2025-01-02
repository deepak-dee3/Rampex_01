import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar'
import Deepak from './Deepak'


import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   
    {/* <BrowserRouter>
    <NavBar/>
    </BrowserRouter> */}
    {/* <NavBar/> */}
    <Deepak/>
    
   
    
   
  </StrictMode>,
)
