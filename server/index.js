import express from "express";
import router from "./Routes/Routes.js";

const app = express();
const PORT = 8000;
app.use('/',router);
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})
