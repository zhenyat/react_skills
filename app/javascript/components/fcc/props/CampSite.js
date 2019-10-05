import React     from "react"
import PropTypes from "prop-types"

const Camper = (props) => <p>Welcome, {props.name}!</p>;

export default  class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Camper/>
      </React.Fragment>
    );
  }
};

Camper.propTypes    = {name: PropTypes.string};
Camper.defaultProps = {name: 'CamperBot'};
