import React, {Component} from "react";
import {render} from "react-dom";
import Olga from '../lib';

class Demo extends Component {
    render() {
        return (
            <div className="container">
                <h1>Demo with examples of the component</h1>
                <Olga/>
            </div>
        );
    }
}

render(<Demo/>, document.getElementById("app"));