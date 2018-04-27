import React, {Component} from 'react';
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
                console.log('this is the response for searching user', response)
                if(response.data.confirmed === false) {
                    alert('USER DOES NOT EXIST')
                }
                 else {
                     console.log('good') //onclick open up a chat with them
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

export default Search;