import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddedCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
            </div>
        );
    }
}
//viene luego de que el reducer guarda el estado en el store, agarras el estado y lo regresas en forma de props
//para que pueda ser usado aqui
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

//agarras los dispatches que seran permitidos usar 
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onAddedCounter: (value) => dispatch({type: "ADDED", value: value}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        onSubtractCounter: (value) => dispatch({type: "SUBTRACT", value: value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);