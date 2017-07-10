const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// takes object, returns doc
// Todo.findOneAndRemove({_id: '5962f7f0ac3b5782f19b15b7'}).then((todo) => {
  // consoloe.log(todo);
// });

// takes ID, returns doc
Todo.findByIdAndRemove('5962f7f0ac3b5782f19b15b7').then((todo) => {
  console.log(todo);
});
