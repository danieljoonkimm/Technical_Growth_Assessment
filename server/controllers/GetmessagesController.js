import GetmessagesModel from '../models/GetmessagesModel.js';

const GetmessagesController = (req, res) => {
    console.log('this is the req.params from messages', req.params)
    GetmessagesModel(req.params, (err, result) => {
        console.log('this is the result in get messages', result)
        if(err) {
            throw err;
        }
        res.send(result)
    })
};

export default GetmessagesController;