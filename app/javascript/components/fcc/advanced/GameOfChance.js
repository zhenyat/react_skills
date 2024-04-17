import React from "react"

class Result extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <h4>{this.props.fiftyFifty}</h4>
      );
    }
}

export default class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        
        this.handleClick = this.handleClick.bind(this);
    }
        
    handleClick() {
        this.setState({counter: this.state.counter+1})
    }
    
    render () {
      let expression = (Math.random() >= 0.5);
      return (
        <React.Fragment>
            <button onClick={this.handleClick}>Play Again</button>
            {this.state.counter == 0 ? '' : expression ? <Result fiftyFifty="You won" /> : <Result fiftyFifty="You lost" />}
            <p>{'Chances: ' + this.state.counter}</p>
        </React.Fragment>
      );
    }
}
