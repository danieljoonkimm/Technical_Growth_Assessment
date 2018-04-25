import SigninModel from '../models/SigninModel.js';

const SigninController = (req, res) => {
    console.log('this is the sign in controllller', req.body)
    SigninModel(req.body.username, (err, result) => {
        console.log('this that resulttt in that sign in', result.results);
        if(err) {
            console.log('this is the errrror in the sign in controller', err)
        }
        let username = result.results[0];
        delete username.password;
        // console.log('after deleted password',username)
        res.status(200).send(username);
    })
}

export default SigninController;