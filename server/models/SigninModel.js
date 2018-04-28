import connection from '../db';

const SigninModel = (username, callback) => {
    console.log('this is the sign in model username', username)
    connection.query(`SELECT * from users WHERE username = "${username}"`, (err, results) => {
        console.log('this be that result from sign in model',results)
        if(err) {
            console.log('this is the errrrrror in sign in model', err)
        }
        callback(err, {results : results})
    })
}

export default SigninModel;