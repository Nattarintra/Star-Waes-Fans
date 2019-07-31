import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-div">
                <p>Loading...</p>
                <img src={logo} className="app-logo" alt="logo" />
            </div>
        )
    }
}

