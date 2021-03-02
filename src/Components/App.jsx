import React, { Component } from 'react';

import Aside from './Aside/Aside';
import Content from './Content/Content';

import "./App.scss";

class App extends Component {
    componentDidMount() {
        window.addEventListener("load", () => {
            window.location.hash = "/"
        })
    }

    render() {
        return (
            <div className="app">
                <Aside />
                <Content />
            </div>
        );
    }
}

export default App;