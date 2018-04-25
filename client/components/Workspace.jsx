import React, {Component} from 'react';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class Workspace extends Component {
    constructor() {
        super()

        this.state = {
            team : ''
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
    }

    createWorkspaceHandler() {
        const payload = {
            team : this.state.team
        }
        // console.log('this the payload from workspace', payload)
        axios.post('/api/createteam', payload)
            .then(response => {
                console.log('this is the workspace response: ', response)
            })
            .catch(err => {
                console.log('this is the err: ', err)
            })
    }

    render() {
        return(
            <div>

                <h1>Sign in to your workspace</h1>

                <div>
                    <input onChange={this.onTextHandler.bind(this)} name='team' placeholder='your-workspace.url'></input>.slack.com
                </div>

                <div>
                    <button onClick={this.continueHandler.bind(this)}>Continue</button>
                    <button onClick={this.createWorkspaceHandler.bind(this)}>Create Workspace</button>
                </div>

            </div>
        )
    }
}

export default Workspace;