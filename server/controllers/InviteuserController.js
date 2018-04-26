import InviteuserModel from '../models/InviteuserModel.js';

const InviteuserController = (req, res) => {
    console.log('this is the invite user controller', req.params);
    InviteuserModel(req.params, (err, result) => {
        console.log('this is the result in invite user controller that i got back from model', result)
        if(err) {
            console.log('this is the err', err)
        }
        // res.send(result)
    })
};

export default InviteuserController;