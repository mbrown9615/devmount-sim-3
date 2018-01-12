import React, { Component } from 'react';
import './home.css';

export default class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="main-home">
                <div className="alt">

                    <div className="home-profile">
                    <button>Edit Profile</button>
                    </div>

                    <div className="profile-about"></div>

                    <div className="friendlist"></div>
                </div>
            </div>
        )
    }
}