import React     from "react"

class ChildComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='child-component'>
          <p className='output'>Hello from Child Component</p>
        </div>
      </React.Fragment>
    );
  }  
};

class ComponentCompound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='child-component'>
          <h5 className='output'>I'm Parent Component</h5>
          <ChildComponent />
        </div>
      </React.Fragment>
    );
  }
};

export default ComponentCompound
