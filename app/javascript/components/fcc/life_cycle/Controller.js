import React from "react"
import PropTypes from "prop-types"

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillUpdate() {
    console.log('Component is about to update...');
  }
  
  // Create componentWillReceiveProps
  // Pass in argument nextProps and log out the current prop and next prop
  UNSAFE_componentWillReceiveProps(nextProps) {
    // Log the current property and the next property  
    console.log(this.props, nextProps);
  }

  // Create function componentDidUpdate
  // Log out that the component has updated
  componentDidUpdate() {
    console.log("Component has been updated");
  } 
  render() {
    return <h4>{this.props.message}</h4>;
  }
};

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <React.Fragment>
        <h4>See console logs as well</h4>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </React.Fragment>
    );
  }
};
