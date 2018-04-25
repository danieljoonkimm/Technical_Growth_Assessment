import React, {Component} from 'react';
import axios from 'axios';
import Confirm from './Confirm.jsx';
import Login from './Login.jsx';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class Workspace extends Component {
    constructor() {
        super()

        this.state = {
            team : '',
            status : 1,
            username : '',
            password : '',
            goodTeam : false
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
                console.log('this that response for contining so that you can login', response.data.results)
                if(!response.data.results.length) {
                    alert('THERE IS NO TEAM NAME THAT EXISTS THAT YOU ENTERED')
                }
                else {
                    console.log('good job')
                    this.setState({
                        goodTeam : !this.state.goodTeam,
                        status : 4
                    })
                }
            })
            .catch(err => {
                console.log('this be that error for continue handler to go to login after entering workspace', err)
            })

        //NEED TO MAKE REQUEST TO SERVER TO CHECK TO SEE IF THE WORKSPACE EXISTS
        //IF IT DOES, THEN MAKE SURE TO SEND THEM TO THE LOGIN PAGE.
        //ELSE LET THEM KNOW THAT THE WORKSPACE DOESNT EXIST.
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
                //when this gets click bind the actions to the workspace(team) action to the response and throw it to the store
                //when logged in load the reducers of the usertablerelationship
                //***DO THIS BY TODAYYYYY */
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

                this.state.status === 3 ?
                
                <div>

                <div>
                    <input name='password' type='password' placeholder='enter password'></input>
                    <button onClick={this.validatePassword.bind(this)}>VALIDATE PASSWORD</button>
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

export default Workspace;