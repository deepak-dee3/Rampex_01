import { Component } from "react";
import './ClassComponent.css'

class ClassComponent extends Component{

    render(){

        return(
            <>
           <div className="div1">
            <h1 className="h1">This is class component</h1>
           </div>
           <div classname="container">
            <div className="c1">
                <h1>First</h1>
            </div>
            <div className="c2">
                <h1>Second</h1>
            </div>

           </div>
            </>
        )
    }
}
export default ClassComponent