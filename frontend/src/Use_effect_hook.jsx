import { useEffect, useState } from "react"

function Use_effect_hook()
{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log({count});

        // return(()=>{
        //    setTimeout(()=>{
        //     console.log("cleanup");

        //    },1000) ;
        // })
        return(()=>{console.log("clean up")})

    },[count]);


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

export default Use_effect_hook;


//if any action happens , then the useEffect will be called.

//it is not used as individually.

//when the useState is called , then the useEffect will be called.