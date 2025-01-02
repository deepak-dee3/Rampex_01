import { createContext } from "react";
import Hen1 from "./Hen1"

export let nameContext = createContext();

function Use_context()
{
    
    return(
        <>
        <nameContext.Provider value="water">
        <h1>usecontext</h1>
        <Hen1/>

      </nameContext.Provider>
       
        </>
    )
}

export default Use_context;