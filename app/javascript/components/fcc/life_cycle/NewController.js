import React     from "react"

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 === 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return(<h1>{this.props.value}</h1>);
  }
};

export default class NewController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
         <p>See console logs</p>
      </React.Fragment>
    );
  }
    };