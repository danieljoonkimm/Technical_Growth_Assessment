import React, {Component} from 'react';
import Login from './Login.jsx';
import Workspace from './Workspace.jsx';
import Slackpage from './Slackpage.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
    constructor() {
        super();

    }

    render() {
        console.log('this.props.user is whattt',this.props.LoginUser)
        return(
            <div>
                {/* <Login/> */}
                {!this.props.LoginUser ? <Workspace/> : <Slackpage/>}
            </div>

        )
    }
}

const mapStateToProps = function(state){
    return {
        LoginUser: state.LoginReducer,
        // CreateTeam : state.CreateTeamReducer
    }
}

export default connect(mapStateToProps, null)(App);