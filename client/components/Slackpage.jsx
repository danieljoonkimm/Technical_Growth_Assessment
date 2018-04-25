import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';

class Slackpage extends Component {
    constructor() {
        super();
    }

    render() {
        // console.log('this is the props from slackk', this.props.LoginUser)
        return(
            <div>
                <h2>{this.props.LoginUser.username}</h2>

                <div>
                    
                    <button>LOGOUT</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        LoginUser: state.LoginReducer,
    }
}

export default connect(mapStateToProps, null)(Slackpage);