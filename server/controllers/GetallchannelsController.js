import GetallchannelsModel from '../models/GetallchannelsModel.js';

const GetallchannelsController = (req, res) => {
    console.log('this is the get all channels controlller', req.params)
    GetallchannelsModel(req.params, (err, result) => {
        console.log('this is the resulttttt for getting all channels', result)
        if(err) {
            console.log('this be that errrror in getting all channels controller', err)
        }
        // res.send(result);
    })
};

export default GetallchannelsController;