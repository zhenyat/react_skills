import React     from "react"
import PropTypes from "prop-types"

class ChildComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <p>I'm Child Component</p>
      </React.Fragment>
    );
  }  
};

class ComponentCompound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>I'm Parent Component</h3>
        <ChildComponent />
      </React.Fragment>
    );
  }
};

export default ComponentCompound
