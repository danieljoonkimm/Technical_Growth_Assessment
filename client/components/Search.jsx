import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchUserInfo } from '../actions/actions-searchuserinfo.js';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            searchuser : ''
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    searchUserHandler() {
        axios.get(`/api/searchusertoinvite/${this.state.searchuser}`)
            .then(response => {
                console.log('this is the response for searching user', response.data.result)
                if(response.data.confirmed === false) {
                    alert('USER DOES NOT EXIST')
                }
                 else {
                     console.log('good') //onclick open up a chat with them
                     //start a direct message with them
                     this.props.SearchUserInfo(response.data.result)
                 }
            })
            .catch(err => {
                console.log('this is the error for searching user', err)
            })
    }


    render() {
        return(
            <div>
                <input name='searchuser' onChange={this.onTextHandler.bind(this)} placeholder='search user to invite..'></input>
                <button onClick={this.searchUserHandler.bind(this)}>search user</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SearchUser : state.SearchUserInfoReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        SearchUserInfo
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Search);