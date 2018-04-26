import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';

import axios from 'axios';
import Channel from '../components/channels/index.jsx'

class Slackpage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        console.log('this is props for team name', this.props.LogUser)
        console.log('this is props for team name', this.props.ConfirmTeam)
        // const payload = {
        //     teamId : this.props.LogUser.id,
        //     userId : this.props.ConfirmTeam.id
        // }
     
        axios.get(`/api/getallchannelsforteam/${this.props.LogUser.id}/${this.props.ConfirmTeam.id}`)
        console.log('this be that payloaddddd you feel', payload)
            .then(response => {
                console.log('this is the response for grabbing channel CWL', response)
            })
            .catch(err => {
                console.log('this is the error for the CWM', err)
            })
    }

    render() {
        console.log('this is the props from slackk', this.props.LoginUser)
        //////take care of the this.props.CreateTeam cus its null in the beginning, after just load it when its rdy.
        return(
            <div>
                <h2>{this.props.LoginUser.username}</h2>

                <div>
                    <Channel/>
                    <button>LOGOUT</button>
                </div>
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