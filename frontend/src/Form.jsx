import './Form.css'
function Form()
{
    let name = "Rahul"
    return (
        <>
        <div>
            <form>
                <h1 className="name">Form belongs to {name}</h1>

                {/* <label for = "name">Name</label> */}
                <input type="text" id = "name" name="name" placeholder='Name'required/>
                <br/>
                <br/>
                <input type="email" id = "name" name="name" placeholder='Email'required/>
                <br/>
                <br/>
                <input type="password" id = "password" name='=password' placeholder='Password' required/>
                <br/>
                <br/>
                <select id="choose" name="choose">
                    <option value="feedback">Feedback</option>
                    <option value="contact">Contact</option>
                    <option value='about'>About</option>
               
                </select>
                <br/>
                <br/>
                <input type="radio" id ="option" name="option" value = "option" checked></input>
                <label for="option">Option1</label>
                <br/>
                <br/>
                <input type="radio" id ="option2" name="option2"></input>
                <label for="option2">Option2</label>
                <br/>
                <br/>
                <input type="hidden" id="hidden" name="hidden" value="hiddenValue" required/>
                <br/>
                <br/>
                 <input type="file" id="file" name="file"/><br/><br/>

                 <input type="range" id="range" name="range" min="0" max="100" required></input>
                 <br/>
                 <br/>
                 <input type='search' name="search" id = 'search' required></input>
                 <br/>
                 <br/>
                 <input type="url" id="url" name="url" required/><br/><br/>
                 <input type="tel" id="tel" name="tel" required></input><br/><br/>
                 <input type="month" id="month" name="month" required></input><br/><br/>
                 <input type="datetime-local" id="datetime" name="datetime" required></input><br/><br/>
                 <input type="number" id="number" name="number" min="1" max="10" required></input><br/><br/>



               
                <button type="submit">Click</button>
                
            </form>
        </div>
        </>
    )
}

export default Form