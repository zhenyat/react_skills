import React     from "react"
import PropTypes from "prop-types"

const List = (props) => {
    return <p>{props.tasks}</p>;
//  return <p>{props.tasks.join(', ')}</p>; // error: TypeError: props.tasks.join is not a functiond
                                            // Workout: usr `join` in ToDo component
};

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h3>To Do Lists</h3>
        
        <h5>Today:</h5>
        <List tasks={["walk dog", "workout"].join(', ')}/>
        
        <h5>Tomorrow:</h5>
        <List tasks={["write report", "visit dentist", "meet friends"].join(', ')}/>
      </React.Fragment>
    );
  }
};

