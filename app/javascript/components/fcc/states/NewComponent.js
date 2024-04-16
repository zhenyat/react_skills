import React from "react"

export default class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state   = {itemCount: 0};
    this.addItem = this.addItem.bind(this);
  }
  
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  
  render () {
    return (
      <React.Fragment>
        <button onClick={this.addItem}>Add Item</button>
        <h5>Current Item Count: {this.state.itemCount}</h5>
      </React.Fragment>
    );
  }
}
