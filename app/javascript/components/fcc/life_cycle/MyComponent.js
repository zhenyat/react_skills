import React     from "react"
import PropTypes from "prop-types"

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    // Create componentWillReceiveProps
    // Pass in argument nextProps and log out the current prop and next prop
    console.log("Show in console: before rendering...");
  }

  render () {
    return (
      <React.Fragment>
        See console log: "Show in console: before rendering..."
      </React.Fragment>
    );
  }
}

export default MyComponent
