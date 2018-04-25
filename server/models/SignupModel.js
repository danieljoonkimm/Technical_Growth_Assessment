import connection from '../db';
import bcrypt from 'bcryptjs';

const SignupModel = function (reqbody, callback) {
    console.log('this is the signupppppp', reqbody)
    connection.query(`SELECT * FROM users WHERE username = "${reqbody.username}"`, function (err, result, fields) {
      if (err) { throw err; } 
      console.log('this beeee the resultstestsets', result)
      if (!result.length) {
        console.log('this is the data from a query for user', result);
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(reqbody.password, salt, function(err, hash) {
            connection.query(
              `INSERT INTO users (username, password, picture) 
              VALUES('${reqbody.username}', '${hash}', ${null})`,
              function (err, result, fields) {
                if (err) { throw err; } 
                console.log('this is in the model', result);
                callback(err, {results: reqbody.username});
              }); 
            // Store hash in your password DB.
          });
        });
      
      } else {
        callback(err, {results: null});
      }
    });  
  };

export default SignupModel;