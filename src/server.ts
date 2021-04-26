import express from 'express';
import './database';


const app = express();
app.use(express.json())

app.get("/", (req, res)=>{
    return res.send("Ola");
})

app.listen(3333, () => {
    console.log("Server is running")
})