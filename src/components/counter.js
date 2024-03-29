import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);