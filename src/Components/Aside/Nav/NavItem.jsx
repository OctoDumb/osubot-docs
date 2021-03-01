import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavItem extends Component {
    componentDidMount() {
        if (this.props.active)
            document.querySelector(".nav__item").classList.add("nav__item--active")
    }

    setActive(e) {
        document.querySelectorAll(".nav__item").forEach(item => item.classList.remove("nav__item--active"));
        e.target.classList.add("nav__item--active");
    }

    render() {
        const { text } = this.props;

        return <Link 
            className="nav__item first-letter"
            to={text !== "main" ? text : ""}
            onClick={e => this.setActive(e)}
        >
            {this.props.text}
        </Link>
    }
}

export default NavItem;