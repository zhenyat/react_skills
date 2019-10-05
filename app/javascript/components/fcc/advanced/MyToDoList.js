import React     from "react"
import PropTypes from "prop-types"

const textAreaStyles = {
  width: 235,
  margin: 5
};

export default class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
//  const items = this.state.toDoList.map(item => <li>{item}</li>); // short statement
    const items = this.state.toDoList.map(function(item) {
      return(<li>{item}</li>);
    });
    return (
      <React.Fragment>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>
          Create List
        </button>
        <h3>My "To Do" List:</h3>
        <ul>
          {items}
        </ul>
      </React.Fragment>
    );
  }
};
