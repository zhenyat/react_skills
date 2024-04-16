import React from "react"

export default class MoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter    = this.handleEnter.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  UNSAFE_componentWillMount() {
    document.removeEventListener("keydown", this.handleKeyPress)    
  }
  handleEnter(event) {
    this.setState({
      message: this.state.message + 'You pressed the enter key! ' 
    });
  }
  handleKeyPress(event) {
    if (event.keyCode == 13) {
      this/handleEnter();
    }
  }
  ReactDOMrender () {
    return (
      <React.Fragment>
        <h4>{this.state.message}</h4>
      </React.Fragment>
    );
  }
}

