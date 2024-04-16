import React from "react"

export default class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Zhenya'};  // Initialize state here
  }
  
  render () {
    const altWayName = this.state.name
    return (
      <React.Fragment>
        <h5>Direct rendering: {this.state.name}</h5>
        <p>or: </p>
        <h5>Alternative rendering (as a variable): {altWayName}</h5>
      </React.Fragment>
    );
  }
}
