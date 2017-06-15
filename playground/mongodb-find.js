const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Pick up rocks',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Find returns a cursor object
  // db.collection('Users').find().toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Roberto"}).toArray().then((docs) => {
    console.log('Users named Roberto:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
      console.log('Unable to fetch todos', err);
  });


// will interfere with above count, apparently
//  db.close();
});
