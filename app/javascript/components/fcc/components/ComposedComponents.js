import React     from "react"
import PropTypes from "prop-types"

const Citrus = () => {
    return (
        <React.Fragment>
            <h3>Citrus Fruits:</h3>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
            </ul>
        </React.Fragment>
    );
};

const NonCitrus = () => {
    return (
        <React.Fragment>
            <h3>Citrus Fruits:</h3>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </React.Fragment>
    );
};

class Fruits extends React.Component {
  render() {
      return(
        <React.Fragment>
          <h2>Fruits</h2>
          <NonCitrus/>
          <Citrus/>
        </React.Fragment>
      );
  } 
};

class ComposedComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Fruits/>
      </React.Fragment>
    );
  }
};

export default ComposedComponents
