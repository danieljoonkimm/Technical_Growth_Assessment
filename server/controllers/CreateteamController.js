import CreateteamModel from '../models/CreateteamModel.js';

const CreateteamController = (req, res) => {
    console.log('this is create team controller', req.body)
    CreateteamModel(req.body, (err, result) => {
        console.log('this is from the create teammmm controller', result)
        if(err) {
            console.log('error from the create team controller!!!', err)
        }
        res.send(result);
    })
}

export default CreateteamController;