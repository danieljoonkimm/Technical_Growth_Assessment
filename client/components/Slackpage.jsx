import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';

import Workspace from '../components/Workspace.jsx';

import axios from 'axios';
import Channel from '../components/channels/index.jsx'

class Slackpage extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn : false,
            allchannels : []
        }
    }

    componentWillMount() {
        console.log('this is props for user name', this.props.LogUser)
        console.log('this is props for team name', this.props.ConfirmTeam)

        //if logging in with existing team
        if(this.props.ConfirmTeam !== null) {
            axios.get(`/api/getallchannelsforteam/${this.props.LogUser.id}/${this.props.ConfirmTeam.id}`)
                .then(response => {
                    console.log('this is the response for grabbing channel CWL', response)
                    //push the response data results to the all channels array
                })
                .catch(err => {
                    console.log('this is the error for the CWM', err)
                })
                //if they're creating a new team
        } 
    }
    
    logoutHandler() {
        console.log('this be that logout handler')
        this.setState({
            loggedIn : !this.state.loggedIn
        })

    }

    render() {
        console.log('this is the props from slackk', this.props.LoginUser)
        //////take care of the this.props.CreateTeam cus its null in the beginning, after just load it when its rdy.
        return(
            <div>
                <h2>{this.props.LoginUser.username}</h2>
                {!this.state.loggedIn ? 
                <div>
                    <Channel allchannels={this.state.allchannels}/>
                    <button onClick={this.logoutHandler.bind(this)}>LOGOUT</button>
                </div>

                : <Workspace/>
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

export default connect(mapStateToProps, matchDispatchToProps)(Slackpage);