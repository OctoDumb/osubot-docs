import React, { Component } from 'react'
import { Route } from "react-router-dom";
import StackGrid from "react-stack-grid";
import { commands as AllCommands } from "../../../commands.json";

import Bubble from '../../Bubble/Bubble';
import Command from '../Command/Command';

import "./Module.scss";

export default class Module extends Component {
    state = {
        windowWidth: window.innerWidth,
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.setState({ windowWidth: window.innerWidth }));
    }

    findCommands() {
        const { commands } = this.props.module;
        let findedCommands = [];

        commands.forEach(command => {
            let findedCommand = AllCommands.find(c => c.name === command)
            if (findedCommand) findedCommands.push(findedCommand);
        })

        return findedCommands
    }

    getModuleContent() {
        const { name, description, prefix } = this.props.module;
        const commands = this.findCommands();

        return <div className="module">
            <h2 className="module__name first-letter">{name}</h2>
            <span className="module__description">{description}</span>
            <Bubble text={prefix} size={48}/>
            {commands.length ? <>
                <h4 className="title">Команды</h4>
                <StackGrid 
                    columnWidth={this.state.windowWidth >=800 ? 660 : "95%"} 
                    className="commands"
                >
                    {commands.map(c => <Command data={c}/>)}
                </StackGrid>
            </>: null}
        </div>
    }

    render() {
        const { name } = this.props.module;
        if (name !== "main")
            return <Route path={`/${name}`}>{this.getModuleContent()}</Route>
        else
            return <Route path="/" exact>{this.getModuleContent()}</Route>
    }
}
