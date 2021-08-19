const express = require('express')
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'client')));
app.use(logger('dev'));
app.use(cookieParser());

app.locals.comments = [];

app.get('/api/comments', (request, response) => {
  if (comment) app.locals.comments.push({ comment: comment });
  response.status(200).json(app.locals.comments);
});

app.post('/api/comments', (request, response) => {
  app.locals.comments.push({ comment: request.body.comment });
  response.status(201).json(app.locals.comments[app.locals.comments.length - 1]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
