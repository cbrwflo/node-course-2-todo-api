const jwt = require('jsonwebtoken');

var data = {
  id: 4
};

var token = jwt.sign(data, 'somesecretsalt');
console.log(`Token: ${token}`);

var decoded = jwt.verify(token, 'somesecretsalt');

//
// The hard way:
//

// var message = 'This is my cleartext.';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// console.log(`Token hash: ${token.hash}`);
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed, do not trust');
// }
