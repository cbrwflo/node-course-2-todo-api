//const SHA256 = require('SHA256'); //hard way to sign and verify tokens
const jwt = require('jsonwebtoken'); //easy way
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$KuKEasv2CnpOyaQmxO/zWuZYF5tNEQeFNMrPyYZbuilqWh5rCfNM6';

bcrypt.compare(password, hashedPassword, (err, res) => {
  //true if passwords match
  console.log(res);
  //false if they don't

});
// Easy way: JWT
// var data = {
//   id: 4
// };
//
// var token = jwt.sign(data, 'somesecretsalt');
// console.log(`Token: ${token}`);
//
// var decoded = jwt.verify(token, 'somesecretsalt');

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
