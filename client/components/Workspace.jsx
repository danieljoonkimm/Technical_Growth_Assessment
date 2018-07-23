import React, {Component} from 'react';
import axios from 'axios';
import Confirm from './Confirm.jsx';
import Login from './Login.jsx';
import Slackpage from './Slackpage.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginUser } from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';

class Workspace extends Component {
    constructor() {
        super()

        this.state = {
            team : '',
            status : 1,
            username : '',
            password : '',
            goodTeam : false,
            // firstStart: ''
        }
    }

    onTextHandler(e) {
        // console.log('this is state', this.state.team)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    continueHandler() {
        console.log('this is the continue handler')

        const payload = {
            team : this.state.team
        }
        // console.log('this the payload for continue handlerrrrr', payload)
        axios.post('/api/checkteamexists', payload)
            .then(response => {
                console.log('this that response for contining so that you can login', response.data.results[0])
                //^^^ {id and team name}
                if(!response.data.results.length) {
                    alert('THERE IS NO TEAM NAME THAT EXISTS THAT YOU ENTERED')
                }
                else {
                    ///SEND THE RESPONSE DATA RESULTS TO STORE
                    this.props.CheckTeam(response.data.results[0]);
                    // console.log('this props.confirmteam', this.props.ConfirmTeam)
                    this.setState({
                        goodTeam : !this.state.goodTeam,
                        status : 4
                    })
                }
            })
            .catch(err => {
                console.log('this be that error for continue handler to go to login after entering workspace', err)
            })
    }

    createWorkspaceHandler() {
        console.log('this state fo team', this.state.team)
        if(!this.state.team) {
            alert('ENTER VALID WORKSPACE NAME')
        } else {
            const payload = {
                team : this.state.team
            }
            axios.post('/api/checkteamexists', payload)
                .then(response => {
                    console.log('this is the response for checking workspace handle', response)
                    if(response.data.results.length) {
                        alert('TEAM ALREADY EXISTS')
                    }
                    else {
                        this.setState({
                            status : 2
                        })
                    }
                })
                .catch(err => {
                    console.log('this is the error for grabbing workspace handler', err)
                })
        }

        //FIND A WAY TO BIND THE ACTION CREATE TEAM SO I CAN SEE THE DATA ON THE SLACK PAGE THROUGH REDUCER
        //FIND A WAY TO GET ALL DATA FROM USERRELATIONSHIPTABLE MAYBE?
        //FIGURE IT OUTTTTTT!!!!!! TODAY!!!!!!!!!
        
    }

    confirmUserHandler() {
        // console.log('this is confirm user handler')
        const payload = {
            username : this.state.username
        }
        console.log('this is payload for confirm user', payload)
        axios.post('/api/user/confirmuser', payload)
            .then(response => {
                console.log('this is the other response from user handler', response)
                console.log('this is the response from the confirm user handler', response.data.confirmed)
                if(response.data.confirmed === false) {
                    alert('NOT A VALID USER')
                }
                else {
                    // document.getElementsByName('username')[0].value = '';
                    this.setState({
                        status : 3
                    })
                }
                document.getElementsByName('password')[0].value = '';
            })
            .catch(err => {
                console.log('this is the err for the confirm user handler', err)
            })
    }

    validatePassword() {
        const firstPayload = {
            username : this.state.username,
            password : this.state.password
        }
        console.log('this the first payloadddddddd', firstPayload)
        axios.post('/api/user/login', firstPayload)
            .then(response => {
                console.log('this is the response to validate the passwordddd', response.data)
                this.props.LoginUser(response.data)
                //this sends me back to my slack page since log user is no longer false
                const payload = {
                    team : this.state.team
                }
                axios.post('/api/createteam', payload)
                    .then(response1 => {
                        console.log('this is the workspace response: ', response1.data)
                        this.props.TeamName(response1.data);
                        console.log('what the heck is this',this.props.CreateTeam)
                        //when this gets click bind the actions to the workspace(team) action to the response and throw it to the store
                        //when logged in load the reducers of the usertablerelationship
                        //***DO THIS BY TODAYYYYY */

                    })
                    .catch(err => {
                        console.log('this is the err: ', err)
                    })
            })
            .catch(err => {
                console.log('this is the error for validating passsworddd', err)
            })
        
        ////SEND ME TO MY SLACKPAGE WITH ALL DATA FROM THE JOIN TABLE
        

    }

    render() {
        return(
            <div className='workspace-container'>
                
                {this.state.status === 1 ? 

                <div>

                <h1>Sign in to your workspace</h1>

                <div id='workspace-input'>
                    <input onChange={this.onTextHandler.bind(this)} name='team' placeholder='your-workspace.url'></input>.slack.com
                </div>

                <div className='workspace-button-container'>
                    <button id='workspace-buttons' onClick={this.continueHandler.bind(this)}>Continue</button>
                    <button id='workspace-buttons' onClick={this.createWorkspaceHandler.bind(this)}>Create Workspace</button>
                </div>

                </div>
                :
                
                this.state.status === 2 ?
                
                <div>

                <div>
                    <input name='username' placeholder='enter username' onChange={this.onTextHandler.bind(this)}></input>
                    <button id='workspace-buttons' onClick={this.confirmUserHandler.bind(this)}>CONFIRM USER EXISTS</button>
                </div>

                </div>

                :

                this.state.status === 3 ?
                
                <div>

                <div>
                    <input name='password' type='password' placeholder='enter password' onChange={this.onTextHandler.bind(this)}></input>
                    <button id='workspace-buttons' onClick={this.validatePassword.bind(this)}>VALIDATE PASSWORD</button>
                </div>

                </div>

                :

                this.state.status === 4 &&

                <div>
                    <Login/>
                </div>
                }
            
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        LogUser: state.LoginReducer,
        CreateTeam : state.CreateTeamReducer,
        ConfirmTeam : state.CheckTeamReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser,
        TeamName,
        CheckTeam
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Workspace);