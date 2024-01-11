const express = require('express');
const app = express();

app.listen(4000, ()=> {
    console.log("Server started at port 4000");
})

app.get('/', (req,res) => {
    res.send("Welcome here");
})