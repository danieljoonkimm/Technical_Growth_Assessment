import UserschannelsModel from '../models/UserschannelsModel.js';

const UserschannelsController = (req, res) => {
    console.log('this is req.body from userschannelscontroller', req.body)
    UserschannelsModel(req.body, (err, result) => {
        console.log('this is the result from the userschannnels model', result)
        if(err) {
            console.log('this is the errror from the userschannels controller', err)
        }
        res.send(result);
    })
};

export default UserschannelsController;