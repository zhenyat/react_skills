import React     from "react"

const Citrus = () => {
    return (
        <React.Fragment>
          <div className='noncitrus-fruits output'>
            <h5>NonCitrus Fruits:</h5>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
            </ul>
          </div>
        </React.Fragment>
    );
};

const NonCitrus = () => {
    return (
        <React.Fragment>
          <div className='citrus-fruits output'>
            <h5>Citrus Fruits:</h5>
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

class Fruits extends React.Component {
  render() {
      return(
        <React.Fragment>
        <div className='fruits output'>
          <h4>Fruits</h4>
          <NonCitrus/>
          <Citrus/>
        </div>
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
