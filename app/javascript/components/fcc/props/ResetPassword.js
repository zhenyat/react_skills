import React     from "react"
import PropTypes from "prop-types"

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
      </React.Fragment>
    );
  }
}

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <h4>Reset Password</h4>
        <h6>We've generated a new temporary password for you.</h6>
        <h6>Please reset this password from your account settings ASAP.</h6>
        <ReturnTempPassword tempPassword="Tmp-Password" />
      </React.Fragment>
    );
  }
}
