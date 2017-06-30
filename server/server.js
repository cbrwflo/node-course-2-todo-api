var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = (process.env.PORT === undefined) ? 3000 : process.env.PORT;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//
// app.get('/todos/', (req, res) => {
//
// });
//
// app.get('/todos/:id', (req, res) => {
//
// });

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

//
// firstUser.save().then((doc) => {
//   console.log('Saved firstUser', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });
