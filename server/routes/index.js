import express from 'express';
import {Router} from 'express';
import SignupController from '../controllers/SignupController.js';
// import SigninController from '../controllers/SigninController.js';

import CreateteamController from '../controllers/CreateTeamController.js';
import ConfirmuserController from '../controllers/ConfirmuserController.js';


const router = Router();

//sign up
router.route('/user/signin')
    .post(SignupController)
//sign in
// router.route('/user/login')
//     .post(SigninController)




//confirm user to create team
router.route('/user/confirmuser')
    .post(ConfirmuserController)

//create team
router.route('/createteam')
    .post(CreateteamController)

export default router;