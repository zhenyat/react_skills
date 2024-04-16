import React from "react"

export default  class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  handleSubmit(event) {
    this.setState({submit: this.state.input});
    event.preventDefault();     // Prevent default refresh web-page
  }

    render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input  name="input" value = {this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h4>{this.state.submit}</h4>
      </React.Fragment>
    );
  }
}
