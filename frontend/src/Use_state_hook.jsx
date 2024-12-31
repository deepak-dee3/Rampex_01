import { useEffect, useState } from "react"

function Use_state_hook()
{
    const [count,setCount] = useState(0)

   


    return(
        <>

        <h2>count:{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>++</button>
        <button onClick={
            ()=>{
                if(count>0){
                    setCount(count-1)
                }else{
                    return 0;
                }
               
            }
            }>--</button>

        </>
    )
}

export default Use_state_hook;