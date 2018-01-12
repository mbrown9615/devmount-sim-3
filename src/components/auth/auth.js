import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './auth.css';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            fade: false
        }
    }

    componentDidMount(){
        this.setState({
            fade: !this.state.fade
        })
    }

    render() {

        return (
            <div className="auth-main">

                <div className={this.state.fade ? "fade-in auth-box":"auth-box"}>

                    <img src={logo} alt="logo" />

                    <h1>HELO</h1>

                    <button>Login / Register</button>
                </div>

            </div>
        )
    }
}