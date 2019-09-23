import React     from "react"
import PropTypes from "prop-types"
import ReactDOM  from "react-dom"

class RenderClassComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Hello (rendered in the definite node)</h3>
      </React.Fragment>
    );
  }
};

//export default RenderClassComponent
ReactDOM.render(<RenderClassComponent />, document.getElementById('challenge-node'));
