import React     from "react"
import PropTypes from "prop-types"

const styles = {                    // must be object, NOT STRING!
  color:           "purple", 
  fontSize:        40, 
  border:          "2px solid purple",
  backgroundColor: "lightgreen"
};

// change code above this line
export default class NewColorful extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div style={styles}>
          Style Me!
        </div>
      </React.Fragment>  
    );
  }
}
