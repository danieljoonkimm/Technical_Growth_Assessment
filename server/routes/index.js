import express from 'express';
import {Router} from 'express';

import SignupController from '../controllers/SignupController.js';
import SigninController from '../controllers/SigninController.js';

import CreateteamController from '../controllers/CreateteamController.js';
import ConfirmuserController from '../controllers/ConfirmuserController.js';

import CheckteamController from '../controllers/CheckteamController';

import passport from '../passport.js';

const router = Router();

//sign up
router.route('/user/signup')
    .post(SignupController)
//sign in
router.route('/user/login')
    .post(passport.authenticate('local', {session : false}),SigninController)




//confirm user to create team
router.route('/user/confirmuser')
    .post(ConfirmuserController)

//create team
router.route('/createteam')
    .post(CreateteamController)


//check team exists
router.route('/checkteamexists')
    .post(CheckteamController)

export default router;