import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props)
        {
            this.state = {
                count: 0
            }
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`;
    }
    componentDidUpdate(prevProps, prevState) {
        document.title = `clicked ${this.state.count} times`;
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>+</button>
                <label>{this.state.count}</label>
            </div>
        );
    }
}

export default Counter;
