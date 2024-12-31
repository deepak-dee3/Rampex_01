import React, { Component, useState } from "react";
import PropTypes from "prop-types";

function Props(props)
{
    let [name,setName] = useState("amar");
    let num_ = 25;
    return(
        <>
        <h1>Name is {props.age} </h1>

        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <h1>Name is {name}</h1>

        <br/><br/>
        <h2>{props.num} + {num_} </h2>

        <h3>{props.num} + {num_} = {props.num + num_}</h3>



       



             


        </>
    )
}
export default Props


// class Props extends Component{

//     render()
//     {
//         return(
//             <>
//             <h2>Name is {this.props.name}</h2>
//             </>
//         )
//     }
// }
// export default Props


// function Props({name,age})
// {
//     return(
//         <>
//         <h1>name is {name} , age is {age}</h1>
//         </>
//     )

// }

// Props.propTypes = {

//     name : PropTypes.string.required,

//     age : PropTypes.number,


// }

// Props.defaultProps = {
//     age: 18,
// };

// export default Props