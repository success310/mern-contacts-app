const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// if (process.env.NODE_ENV !== 'test') {
//   mongoose.connect('mongodb://localhost/comments',  {
//     useMongoClient: true, // weird new flag mongoose requires
//   });
// }

// app.use(bodyParser.json());

// routes specific to driver CRUD
// const commentRouter = require('./server/routes/comment');
//   app.use('/comment', commentRouter);

module.exports = app;
