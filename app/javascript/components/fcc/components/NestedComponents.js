import React     from "react"

const TypeOfFruit = () => {
    return(
      <React.Fragment>
        <div className='type-of-fruit output'>
          <h6>Fruits:</h6>
          <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
          </ul>
        </div>
      </React.Fragment>
    );
};

const Fruits = () => {
    return(
      <React.Fragment>
        <div className='fruits output'>
          <TypeOfFruit />
        </div>
      </React.Fragment>    
    );
};

class NestedComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='foods output'>
          <h5>Types of Food:</h5>
            <Fruits/>
        </div>
      </React.Fragment>
    );
  }
};

export default NestedComponents
