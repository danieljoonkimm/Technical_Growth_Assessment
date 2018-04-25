import CheckteamModel from '../models/CheckteamModel.js';

const CheckteamController = (req,res) => {
    console.log('this the check team controlllller', req.body)
    CheckteamModel(req.body.team, (err, result) => {
        console.log('this be that result for check team controlller: ', result)
        if(err) {
            console.log('this be that error for checking team')
        }
        res.send(result)
    })
}

export default CheckteamController;