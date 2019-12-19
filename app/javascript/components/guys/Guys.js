import React     from "react"
import PropTypes from "prop-types"
import {Table}   from "react-bootstrap"

export default class Guys extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const items = this.props.guys.map(item => 
        <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        </tr>);

    return (
      <React.Fragment>
        <h1>Guys</h1>
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
      </React.Fragment>
    );
  }
};

Guys.propTypes = {
  guys: PropTypes.array
};
