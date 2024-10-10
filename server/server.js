import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
import spotifyRoutes from './routes/spotify.js'
dotenv.config();


const app = express();
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // Allow cookies to be sent and received
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use('/api/spotify',spotifyRoutes);
app.listen(8000,()=>console.log("Server started"))