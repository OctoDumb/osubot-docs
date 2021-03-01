import React, { Component } from 'react';

import { modules } from "../../modules.json";

import "./Content.scss";
import Module from './Module/Module';

class Content extends Component {
    render() {
        return (
            <main className="content">
                {modules.map((module, i) => <Module key={`module_${i}`} module={module}/>)}
            </main>
        );
    }
}

export default Content;
