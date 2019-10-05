import React     from "react"
import PropTypes from "prop-types"

export default class NextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visibility: false};
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  
  toggleVisibility() {
    if (this.state.visibility)
      this.setState({visibility: false});
    else
      this.setState({visibility: true});
  }
  
  render() {
    if (this.state.visibility) {
      return(
        <React.Fragment>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h2>Now you see me!</h2>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </React.Fragment>
      );
    }
  }
}