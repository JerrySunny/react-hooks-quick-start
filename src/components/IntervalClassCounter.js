
import React, { Component } from "react";

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                counter: 0
            }
        }
    }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    componentDidMount() {
        setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval()
    }
    render() {
        return (<div>{this.state.counter}</div>)
    }

}

export default IntervalClassCounter;