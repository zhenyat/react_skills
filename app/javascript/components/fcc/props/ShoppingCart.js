import React from "react"

const Items = (props) => {
  if(props.quantity == 0) {
    return(
      <p>Qty is zero</p>
    )
  } else {
    return(
      <p>Current qty of Items in Cart: <strong>{props.quantity}</strong></p>    
    )
  }
}
Items.defaultProps = {quantity: 0}

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <Items />
        <Items quantity={10} />
      </React.Fragment>
    )
  }
}
