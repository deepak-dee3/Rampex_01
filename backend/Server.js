const express = require("express");
const app = express();

app.get('/', (req,res) => {

    console.log("hi");
    //res.status(200).send("hii");
    //res.json({express:"learning express"})
   // res.send("hello");
//    res.json({
//     message1: "Hello",
//     message2: "World",
// });

//app.set("views", "backend/VIEW/index.ejs"); // Specify the correct path to your views directory
   app.set("view engine", "ejs");


   res.render("index",{text:"kamal"});





    //You should only send one response per request. 
    // If you want to send multiple pieces of data, 
    // combine them into a single response or log them to the console.
})



app.listen(3000);