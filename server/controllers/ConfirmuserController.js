import ConfirmuserModel from '../models/ConfirmuserModel.js';

const ConfirmuserController = (req, res) => {
    ConfirmuserModel(req.body, (err, result) => {
        console.log('this is coming from the confirm user controllerrr', result)
        if(err) {
            console.log('this is the error coming from the confirm userrrr', err)
        }
        res.send(result)
    })
}

export default ConfirmuserController;