import PostMessagesModel from '../models/PostMessagesModel.js';

const PostMessagesController = (req, res) => {
    console.log('this is the post messages controller', req.body)
    PostMessagesModel(req.body, (err, result) => {
        console.log('this is the result that ig ot back from model', result)
        if(err) {
            throw err;
        }
        // res.send(result);
    })
};

export default PostMessagesController;