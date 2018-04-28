import PostMessagesModel from '../models/PostMessagesModel.js';

const PostMessagesController = (req, res) => {
    console.log('this is the post messages controller', req.body)
    PostMessagesModel(req.body, (err, result) => {
        console.log('this is the result that ig ot back from model', result)
        // console.log('what\'s the error', err);
        if(err) {
            console.log('this error', err)
        }
        res.send(result);
    })
};

export default PostMessagesController;