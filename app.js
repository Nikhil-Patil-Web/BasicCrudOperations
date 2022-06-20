const express = require('express');
const app = express();
const morgan = require('morgan');
const dataRouter = require ('./routes');


const newLocal = process.env.NODE_ENV === 'development';
// MiddleWare

if (newLocal) {
  app.use(morgan('dev'));
}


app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });
  
app.use('/api/data', dataRouter);
module.exports = app;