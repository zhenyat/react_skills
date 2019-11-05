import React from "react"
import {Card, Button} from "react-bootstrap"

export default class CardAlterbative extends React.Component {
  render () {
      
    const img_src = '<%= asset_path "products/originalScrab.png" %>';
    
    return (
      <React.Fragment>
        <Card style={{width: '12em'}}>
            <Card.Img variant='top' src={img_src} />
          <Card.Body>
            <Card.Title>Hemps Original</Card.Title>
            <Card.Text>
                Скраб для тела
            </Card.Text>
            <Button variant="primary">Заказать</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
