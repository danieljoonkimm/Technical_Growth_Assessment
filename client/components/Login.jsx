import React, {Component} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';

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
                console.log('this is the response for sign in handlerrr', response)
                ///if response is null, do something
                this.props.LoginUser(response.data)
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
        axios.post('/api/user/signup', payload)
            .then(response => {
                if(response.data.results === null) {
                    alert('USER NAME IS ALREADY TAKEN')
                }
                else {
                    console.log('this is the login sign up response', response);
                }
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

const mapStateToProps = (state) => {
    return {
        LogUser: state.LoginReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);