import React from "react"

const CurrentDate = function(props) {      // const CurrentDate = (props) => {
  return (
    <React.Fragment>
        <p>The current date is: <strong>{props.date}</strong> in city: <strong>{props.city}</strong></p>
    </React.Fragment>
  );
};

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <h4>What date is it?</h4>
        <CurrentDate date={Date()} city="SPb" />
      </React.Fragment>
    );
  }
};
