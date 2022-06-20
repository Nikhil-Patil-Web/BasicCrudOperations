const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
const express = require('express');
const app = require('./app');

console.log(app.get('env')); 

const DB = process.env.DATABASE.replace(
   '<password>',
   process.env.DATABASE_PASSWORD
);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB has been Connected!');
  });


const port = 7500;
app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});


