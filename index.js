const express = require('express');
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./db_controllers/connection');

dotenv.config();

const port = process.env.PORT || 3008; 

app.get('/',(req,res)=>{
    res.send('Here we go again');
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

