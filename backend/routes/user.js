const express = require("express");
//const app = express();
let router = express.Router();


router.get('/user1',(req,res)=>{

    res.send("user12 page");
});

router.get('/user2',(req,res)=>{

    res.send("user22 page");
});

module.exports = router;





//router.listen(3000);