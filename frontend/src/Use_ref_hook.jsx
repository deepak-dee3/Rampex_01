import { useRef, useState } from "react"

function Use_ref_hook()
{
    let [count,setCount] = useState(0);

    let countref = useRef(0);

    const increment = () => {

       setCount(count+1);
        countref.current++;

        console.log('count',count);
        console.log('ref',countref.current);
    }

    return (
        <>
        <button onClick={increment}>++</button>
        <h1>count:{count}</h1>
        </>
    )
}

export default Use_ref_hook;


///useState reders all the code 
//useref renders the count value only
