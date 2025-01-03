import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'; 
import router from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());  //body-parser is a middleware ;for passing the json request to body
dotenv.config()
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api/user',router);



mongoose.connect(MONGO_URL)
        .then(()=>{  
            console.log("db connected");
        app.listen(PORT,()=>{
            console.log(`server is running ${PORT}`)
        })
        })
        .catch((err)=>{
            console.log(err)
        })
                           