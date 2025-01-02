import Egg from "./Egg";
function Hen()
{
    const need = "water";
    return(
        <>
        <h1>hen</h1>
        <Egg value={need}/>
        </>
    )
}
export default Hen

