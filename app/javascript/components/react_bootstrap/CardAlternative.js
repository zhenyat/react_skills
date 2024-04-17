import React from "react"
import {Card, Button} from "react-bootstrap"

// from app/javascript
import Image from 'images/originalScrab.png'; // Tell webpack this JS file uses this image

export default class CardAlterbative extends React.Component {
  
  render () {
      
    // Not working...
    // const Image = '<%= asset_path "products/originalScrab.png" %>';
    
    return (
      <React.Fragment>
        <Card style={{width: '12em'}}>
            <Card.Img variant='top' src={Image} alt='Scrab' />

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
