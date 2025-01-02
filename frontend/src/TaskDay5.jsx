import { useRef, useState } from "react"

function TaskDay5()
{
    let [change,setChange] = useState(0);

   // let countref = useRef(0);

    return(
        <>

        <input name="text" id="text" onChange={(e)=>{

            setChange(change+1);
            console.log(event.target.value);
            // countref.current++;

        }} type="text"></input>

        </>
    )
}
export default TaskDay5;