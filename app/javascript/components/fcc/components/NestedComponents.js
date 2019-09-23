import React     from "react"
import PropTypes from "prop-types"

const TypeOfFruit = () => {
    return(
      <React.Fragment>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </React.Fragment>
    );
};

const Fruits = () => {
    return(
      <React.Fragment>
        <TypeOfFruit />
      </React.Fragment>    
    );
};

class NestedComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h2>Types of Food:</h2>
        <Fruits/>
      </React.Fragment>
    );
  }
};

export default NestedComponents
