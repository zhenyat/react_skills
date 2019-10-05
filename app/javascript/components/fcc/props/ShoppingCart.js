import React     from "react"
import PropTypes from "prop-types"

const Items = (props) => {
  return(
    <p>Current qty of Items in Cart: <strong>{props.quantity}</strong></p>    
  );
};
Items.defaultProps = {quantity: 0};

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <Items quantity={10} />
      </React.Fragment>
    );
  }
};
