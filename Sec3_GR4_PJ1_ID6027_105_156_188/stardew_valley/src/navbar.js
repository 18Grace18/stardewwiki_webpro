import React, { Component } from 'react';
import './Nav.css'; 


class NavigationBar extends Component {
    render(){
        return(
            <div class="topnav">
                <a class="active" href="/">Stardew Valley</a>
                <div class="nav navbar-nav navbar-nav-primary">
                    <a href="/login">Log in</a>
                    <a href="/product">Product Management <small>(Admin only!)</small></a>
                    <a href="/user">User Management <small>(Admin only!)</small></a>
                </div>
            </div>
        );
    }
}

export default NavigationBar;