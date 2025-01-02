import { useContext } from "react";
import { nameContext } from "./Use_context";



function Stomach1(){
    
    const name=useContext(nameContext);

    return(
        <>
        <h1>stomach1:{name}</h1>

        </>
    )
}
export default Stomach1