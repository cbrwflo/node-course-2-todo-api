const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Users').deleteMany({name: 'Roberto'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

//Exercise
// db.collection('Users').deleteMany({name: 'Roberto'}).then((result) => {
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5942115a7edc40b7960a2538")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

// will interfere with above count, apparently
//  db.close();
});
