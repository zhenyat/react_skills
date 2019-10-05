import React     from "react"
import PropTypes from "prop-types"

export default class Colorful extends React.Component {
  render() {
    return (
      <React.Fragment>      
        <div style={{color: "red", fontSize: 72}}>
          Big Red
        </div>
      </React.Fragment>
    );
  }
}
