import React from "react"
import {Card, Button} from "react-bootstrap"

export default class CardSample extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Card style={{width: '12em'}}>
            <Card.Img variant='top' src={this.props.img_src} />
          <Card.Body>
            <Card.Title>Конопляная косметика</Card.Title>
            <Card.Text>
                Конопляное масло богато витаминами E, C, B1, B2, B3, B6.
            </Card.Text>
            <Button variant="primary">Заказать</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
