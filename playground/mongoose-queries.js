const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//invalid ID
var id = '95dc48734ac70040c64d194';

// Requires {ObjectID} from MongoDB library
if (!ObjectID.isValid(id)) {
  console.log('ID is not valid: ', id);
}

// // find returns an array (can be empty)
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // findOne returns an object, or NULL if not found
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

//findById returns an object, or NULL if not found
//mongoose will return an error if the ID does not
//cast successfully to an ObjectID
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userID = '5942243b3509988830fe3389';

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
