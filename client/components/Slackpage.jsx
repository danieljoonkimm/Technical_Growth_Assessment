import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';

import Channel from '../components/channels/index.jsx'

class Slackpage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        
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

const mapStateToProps = function(state){
    return {
        LoginUser: state.LoginReducer,
        CreateTeam : state.CreateTeamReducer
    }
}

export default connect(mapStateToProps, null)(Slackpage);