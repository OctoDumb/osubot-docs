import React, { Component } from 'react';

import { modules } from "../../modules.json";

import "./Aside.scss";
import Nav from './Nav/Nav';

class Aside extends Component {
    toggleNav() {
        const nav = document.querySelector(".nav");
        nav.classList.toggle("nav--hidden");
    }

    render() {
        return (
            <aside className="aside">
                <div className="aside__burger" onClick={this.toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="aside__logo">
                    <span>osu!</span>
                    <span>bot</span>
                </div>
                <Nav>
                    {modules.map((m, i) => <Nav.Item key={`nav_${i}`} text={m.name} active={i === 0}/>)}
                </Nav>
            </aside>
        );
    }
}

export default Aside;