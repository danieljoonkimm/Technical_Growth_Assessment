import express from 'express';
import {Router} from 'express';
import SignupController from '../controllers/SignupController.js';
// import SigninController from '../controllers/SigninController.js';
import CreateteamController from '../controllers/CreateTeamController.js';

const router = Router();

//sign up
router.route('/user/signin')
    .post(SignupController)
//sign in
// router.route('/user/login')
//     .post(SigninController)


//create team
router.route('/createteam')
    .post(CreateteamController)

export default router;