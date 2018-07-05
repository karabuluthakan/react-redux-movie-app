import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ActorList from '../ActorList';

class HomePage extends Component {

    state = {
        actors:[{
            name: "",
            description:"",
            photo:"",
        }]
    }

    render() {
        return (
            <div>
                <ActorList actors={this.state.actors}/>
            </div>
        );
    }
}

export default HomePage;
