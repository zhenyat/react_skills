import React     from "react"
import PropTypes from "prop-types"

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Initial State'};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({name: 'React Rocks!'});
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Change State</button>
        <h4>{this.state.name}</h4>
      </React.Fragment>
    );
  }
}
