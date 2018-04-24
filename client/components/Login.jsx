import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username : '',
            password : '',
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onLoginHandler() {
        console.log('this is login handler')
        const payload = {
            username : this.state.username,
            password : this.state.password
        }
        axios.post('api/user/login', payload)
            .then(response => {
                console.log('this is the response for login handlerrr', response)
            })
            .catch(err => {
                console.log('this is the err for login handlerrrr', err)
            })
    }

    onSignupHandler() {
        const payload = {
            username : this.state.username,
            password : this.state.password
        }
        axios.post('/api/user/signin', payload)
            .then(response => {
                console.log('this is the login signup response', response)
                this.setState({
                    signupComplete : !this.state.signupComplete
                })
            })
            .catch(err => {
                console.log('this is the login signup err', err)
            })
    }

    render() {
        return(
            <div>
                
                <div onChange={this.onTextHandler.bind(this)}>
                    Username: <input name='username' placeholder='enter username..'></input>
                    <br/>
                    Password: <input type='password' name='password' placeholder='enter password..'></input>
                </div>

                <div>
                    <button onClick={this.onLoginHandler.bind(this)}>Sign In</button>
                    <button onClick={this.onSignupHandler.bind(this)}>Sign Up</button>
                </div>
                

            </div>
        )
    }
}

export default Login;