const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3008;

app.get('/',(req,res)=>{
    res.send('Here we go again');
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});


