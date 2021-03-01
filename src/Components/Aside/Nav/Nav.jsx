import React, { Component } from 'react';

import NavItem from './NavItem';

import "./Nav.scss";

class Nav extends Component {
    static Item = NavItem;

    render() {
        return (
            <nav className="nav">
                {this.props.children}
            </nav>
        );
    }
}

export default Nav;
