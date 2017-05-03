import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

//import React, {PropTypes} from 'react';
//import {render} from 'react-dom';
//import {createStore} from 'redux';
//import {connect, Provider} from 'react-redux';
//
//const reducer = (state, action) => {
//  switch (action.type) {
//    case 'INCREMENT':
//      return {...state, counter: state.counter + 1};
//    case 'DECREMENT':
//      return {...state, counter: state.counter - 1};
//    default:
//      return state;
//  }
//};
//
//const store = createStore(reducer, {counter: 0});
//
//class Counter extends React.Component {
//  static propTypes = {
//    counter: PropTypes.Number,
//    onIncrement: PropTypes.func,
//    onDecrement: PropTypes.func
//  };
//
//  render() {
//    const {counter, onDecrement, onIncrement} = this.props;
//
//    return (
//      <div>
//        <div>{counter}</div>
//        <button onClick={onDecrement}>-</button>
//        <button onClick={onIncrement}>+</button>
//      </div>
//    );
//  }
//}
//
//const mapStateToProps = (state) => {
//  return {counter: state.counter};
//};
//
//const mapDispatchToProps = (dispatch) => {
//  return {
//    onIncrement: () => dispatch({type: 'INCREMENT'}),
//    onDecrement: () => dispatch({type: 'DECREMENT'})
//  }
//};
//
//Counter = connect(mapStateToProps, mapDispatchToProps);
//
//render(
//  <Provid er store={store}>
//    <Counter />
//    </Provider>
//  , document.getElementById('root')
//);
//
