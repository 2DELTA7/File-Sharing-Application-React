import express from "express";
import dotenv from "dotenv";
import router from "./Routes/Routes.js";
import cors from 'cors';
import DBConnection from "./Database/db.js";
const app = express();
app.use(cors());
const PORT = 8000;
app.use('/',router);
DBConnection();
dotenv.config();
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})
