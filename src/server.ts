import express, { response } from 'express';

const app = express();

app.get("", (req, res)=>{
    return res.send("Ola");
})

app.listen(3333, () => {
    console.log("Server is running")
})