import express from 'express';
import {Router} from 'express';

import SignupController from '../controllers/SignupController.js';
import SigninController from '../controllers/SigninController.js';

import CreateteamController from '../controllers/CreateteamController.js';
import ConfirmuserController from '../controllers/ConfirmuserController.js';

import CheckteamController from '../controllers/CheckteamController';

import MakechannelController from '../controllers/MakechannelController.js';
import GetallchannelsController from '../controllers/GetallchannelsController.js';

import InviteuserController from '../controllers/InviteuserController.js';

import UserschannelsController from '../controllers/UserschannelsController.js';

import GetMessagesController from '../controllers/GetMessagesController.js';

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


//make channel
router.route('/makechannel')
    .post(MakechannelController)

//get all channels for team
router.route('/getallchannelsforteam/:userid/:teamid/')
    .get(GetallchannelsController)

//search user to invite to channel
router.route('/searchusertoinvite/:userId')
    .get(InviteuserController)


//send user id and channel id to userschannels table
router.route('/sendtouserschannels')
    .post(UserschannelsController)

//grab messages
router.route('/getmessages/:userId/:channelId')
    .get(GetMessagesController)

export default router;