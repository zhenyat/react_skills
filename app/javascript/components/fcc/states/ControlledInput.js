import React     from "react"
import PropTypes from "prop-types"

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render () {
    return (
      <React.Fragment>
        <input value = {this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>You're typing: <strong>{this.state.input}</strong></p>
      </React.Fragment>
    );
  }
};

export default ControlledInput
