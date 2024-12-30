function List()
{
    return(
        <>

<ol>
           <li>Fruits</li>
             <ul>
                <dl><span style={{ marginRight: "5px" }}>*</span>mango</dl>
                <dl><span style={{ marginRight: "5px" }}>*</span>apple</dl>
             </ul>
            
           <li>vegetables</li>
           <br/>
           <ul style={{ listStyleType: 'lower-roman' }}>
            <li>carrot</li>
            <br/>
            <li>beetroot</li>
            <br/>
           </ul>
           <li>Birds</li>
           <ul >
            <dl><span style={{ marginRight: "5px" }}>#</span>peacock</dl>
            <dl><span style={{ marginRight: "5px" }}>#</span>parrot</dl>
           </ul>
        </ol>
        </>
    )
}

export default List