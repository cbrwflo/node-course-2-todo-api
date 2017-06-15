const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // follow-along
  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5942101c7edc40b7960a24a3')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // challenge
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5942116c7edc40b7960a253e')
  }, {
    $set: {
      name: 'Reality Winner'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // will interfere with above count, apparently
  //  db.close();
});
