import { createConnection } from 'mysql';

const connection = createConnection({

  user: 'root',
  password: '',
  database: 'technical',
  server: 'localhost',
  port: 3306

});

connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to db!');
});

export default connection;