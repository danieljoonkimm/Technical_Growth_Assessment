import React, {Component} from 'react';
import axios from 'axios';
import Confirm from './Confirm.jsx';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class Workspace extends Component {
    constructor() {
        super()

        this.state = {
            team : '',
            status : 1,
            username : '',
            password : ''
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

        //need to make request to server to check to see if the workspace exists.. 
        //if it does, then make sure to send them to the login page.
        //else let them know that the workspace doesnt exist.
    }

    createWorkspaceHandler() {
        if(!this.state.team) {
            alert('ENTER VALID WORKSPACE NAME')
        } else {
            this.setState({
                status : 2
            })
        }
        // console.log('this the payload from workspace', payload)
        
    }

    confirmUserHandler() {
        // console.log('this is confirm user handler')
        const payload = {
            username : this.state.username
        }
        axios.post('/api/user/confirmuser', payload)
        // console.log('this is payload for confirm user', payload)
            .then(response => {
                console.log('this is the response from the confirm user handler', response.data.confirmed)
                if(response.data.confirmed === false) {
                    alert('NOT A VALID USER')
                }
                else {
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
        // const firstPayload = {
        //     username : this.state.username,
        //     password : this.state.password
        // }
        // axios.post('/api/user/login', firstPayload)
        //     .then(response => {
        //         console.log('this is the response to validate the passwordddd', response)
        //     })
        //     .catch(err => {
        //         console.log('this is the error for validating passsworddd', err)
        //     })
        //SEE WHAT I CAN DO WITH THE SAME ROUTE.
        const payload = {
            team : this.state.team
        }
        axios.post('/api/createteam', payload)
            .then(response => {
                console.log('this is the workspace response: ', response)
                // {this.setState({
                //     status : 4
                // })}
            })
            .catch(err => {
                console.log('this is the err: ', err)
            })

    }

    render() {
        return(
            <div>
                
                {this.state.status === 1 ? 

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
                :
                
                this.state.status === 2 ?
                
                <div>

                <div>
                    <input name='username' placeholder='enter username' onChange={this.onTextHandler.bind(this)}></input>
                    <button onClick={this.confirmUserHandler.bind(this)}>CONFIRM USER EXISTS</button>
                </div>

                </div>

                :

                this.state.status === 3 &&
                
                <div>

                <div>
                    <input name='password' type='password' placeholder='enter password'></input>
                    <button onClick={this.validatePassword.bind(this)}>VALIDATE PASSWORD</button>
                </div>

                </div>
                
                }
                
            </div>
        )
    }
}

export default Workspace;