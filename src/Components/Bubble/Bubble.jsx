import React, { Component } from 'react';

import "./Bubble.scss";

class Bubble extends Component {
    render() {
        const { text, size } = this.props;

        return <span 
            className="bubble first-letter"
            style={{ fontSize: `${size ?? 36}px` }}
        >
            {text}
        </span>
    }
}

export default Bubble;
