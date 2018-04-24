import SignupModel from '../models/SignupModel.js';

const SignupController = (req,res) => {
    console.log('this is req.body from signup controller', req.body)
    SignupModel(req.body, (err, result) => {
        console.log('result from signup controllerrrrrr', result);
        if(err) {
            console.log('this error is in signup controller', err)
        }
        res.send(result);
    });
};

export default SignupController;