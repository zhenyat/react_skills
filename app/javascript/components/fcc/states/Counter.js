import React     from "react"
import PropTypes from "prop-types"

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset     = this.reset.bind(this);
  }
  
  decrement() {
    this.setState({count: this.state.count - 1});
  }
  
  increment() {
    this.setState({count: this.state.count + 1});
  }
  
  reset() {
    this.setState({count: 0});
  }
  
  render () {
    return (
      <React.Fragment>
        <button className='inc'   onClick={this.increment}>Increment!</button>
        <button className='dec'   onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h4>Current Count: {this.state.count}</h4>
      </React.Fragment>
    );
  }
}
