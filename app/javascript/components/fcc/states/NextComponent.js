import React from "react"

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
          <button onClick={this.toggleVisibility}>Hide</button>
          <h4>Now you see me!</h4>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button onClick={this.toggleVisibility}>Show</button>
        </React.Fragment>
      );
    }
  }
}