import React, {Component} from 'react';
import axios from 'axios';

class Confirm extends Component {
    constructor() {
        super();

        this.state = {
            username : '',
            confirmed : false
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    confirmUserHandler() {
        console.log('this is confirm user handler')
        const payload = {
            username : this.state.username
        }
        axios.post('/api/user/confirmuser', payload)
        // console.log('this is payload for confirm user', payload)
            .then(response => {
                console.log('this is the response from the confirm user handler', response)
            })
            .catch(err => {
                console.log('this is the err for the confirm user handler', err)
            })
    }

    render() {
        return(
            <div>
                
                <div>
                    <input name='username' placeholder='enter username' onChange={this.onTextHandler.bind(this)}></input>
                    <button onClick={this.confirmUserHandler.bind(this)}>CONFIRM USER EXISTS</button>
                </div>

            </div>
        )
    }
}

export default Confirm;