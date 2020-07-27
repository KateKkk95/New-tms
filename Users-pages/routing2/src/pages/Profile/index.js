import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './index.css';
import { showProfile, friendsRow } from '../../actions';


class ProfilePage extends Component {
    componentDidMount = async () => {
        console.log(this.props)
        try {
            const response = await axios.get(`http://localhost:3001/users/${this.props.match.params.index}`);
            console.log(response)
            this.props.showProfile(response.data);

        }
        catch (error) {
            console.log(error);
        }

    }
    // componentDidUpdate() {
    //     if (this.props.data. === ) {
    //         this.fetchData(this.props.profile.index);
    //     }
    // }
    render() {

        return (
            <div className="card_page">
                <div>
                    <h1>PROFILE</h1>
                </div>
                <div className="profile_info">
                    <h2>Name:  {this.props.Profile?.name.first}</h2>
                    <h2>Surname:  {this.props.Profile?.name.last}</h2>
                    <h2>Phone:  {this.props.Profile?.phone}</h2>
                    <h2>E-mail:  {this.props.Profile?.email}</h2>
                    <img className="img" src={this.props.Profile?.picture} />
                    {/* <h2> Friends {this.props.Friends}</h2> */}
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        Profile: state.profile,
        Friends: state.user?.friends
    };
}

export default connect(mapStateToProps, { showProfile, friendsRow })(ProfilePage);