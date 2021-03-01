import React, { Component } from 'react';
import Bubble from '../../Bubble/Bubble';

import "./Command.scss";

class Command extends Component {
    getArgsContent(text) {
        const parts = text.split("-");
        const highlighted = parts[0];
        parts.shift();
        return <p>
            <span className="command__highlighted">{highlighted}</span> - {parts.join("-")}
        </p>
    }

    render() {
        const { name, description, prefixes, arguments: args } = this.props.data;

        return (
            <article className="command">
                <div className="command__row">
                    <div className="command__divider"></div>
                    <h4 className="command__title first-letter">{name}</h4>
                    <div className="command__divider"></div>
                </div>
                <div className="command__row command__bubbles">
                    {prefixes.map((p, i) => <Bubble key={i} text={p}/>)}
                </div>
                <span className="command__description">{description}</span>
                {args.length ? <>
                    <h4 className="title">Аргументы</h4>
                    <div className="command__arguments">
                        {args.map((a, i) => this.getArgsContent(a))}
                    </div>
                </> : null}
            </article>
        );
    }
}

export default Command;
