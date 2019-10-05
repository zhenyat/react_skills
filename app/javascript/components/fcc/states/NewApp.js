import React     from "react"
import PropTypes from "prop-types"

export default  class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render () {
    return (
      <React.Fragment>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue} />
      </React.Fragment>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </React.Fragment>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </React.Fragment>
    );
  }
};
