import Use_ref_hook from "./Use_ref_hook"
import Use_context from "./USECONTEXT1/Use_context"

function About()
{
    return(
        <>
        <h1 style={{textAlign:"center",paddingTop:"10%"}}>About Page</h1>
        {/* <Use_ref_hook/> */}
        <Use_context/>
      
        </>
    )
}
export default About