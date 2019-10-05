import React     from "react"
import PropTypes from "prop-types"

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
        <h4>Current Item Count: {this.state.itemCount}</h4>
      </React.Fragment>
    );
  }
}
