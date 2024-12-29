import { Component } from "react";
import './Slam.css'

class Slam extends Component{

    

    render(){
        return(

            <>
            <div className="main" >
                <div className="main2">
                <div className="heading_slam">
                    <h2>SLAM BOOK</h2>
                 </div>
                 <div className="content">
                    Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text"></input><br/><br/>
                    NickName: <input type="text"></input><br/><br/>
                    <label for='address-input'>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                   <textarea rows="1.5" cols="20" class="address-input" name="address-input" id="address-input"></textarea><br/><br/>
                   
                    Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input type="number"></input><br/><br/>
                    Memories&nbsp;&nbsp;:<input type='text'></input><br/><br/>
                    <input type="radio" name="gender"></input> Male<br/><br/>
                    <input type="radio" name='gender'></input> Female<br/><br/>
                    <input type="checkbox" name='actor'></input> Alan<br/><br/>
                    <input type='checkbox' name="actor"></input> Harry<br/><br/>
                    <select>
                    <option value="school">Select school</option>
                        <option value="malar">Malar</option>
                        <option value="kongu">kongu</option>
                    </select><br/><br/>

                 </div>
                 
                </div>
            </div>
            </>

        )
    }
}
export default Slam