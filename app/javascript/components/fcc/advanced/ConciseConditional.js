import React from "react"

const displayStyle = {
  width: 235,
  margin: 5,
  backgroundColor: "lightyellow"
};

export default class ConciseConditional extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dinnerCooked: true}
      
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }
  
    toggleDisplay() {
        this.setState({
            dinnerCooked: !this.state.dinnerCooked
        });
    }
  
    render () {
        return (
            <React.Fragment>
                <button style={displayStyle} onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.dinnerCooked && <h5 style={displayStyle}>Dinner Cooked!</h5>}
            </React.Fragment>
        );
    }
};
