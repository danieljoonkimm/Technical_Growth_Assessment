import MakechannelModel from '../models/MakechannelModel.js';

const MakechannelController = (req, res) => {
    console.log('this is the make channel controlller reqbody', req.body)
    MakechannelModel(req.body, (err,result) => {
        console.log('this is the make channel modelll resulttttt', result)
        if(err) {
            console.log('this be the errror from make channnel')
        }
        // res.send(result);
    })
};

export default MakechannelController;