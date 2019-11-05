/***************************************************************
 * Accordion of two components: Alerts & AlertLinks
 * 
 * Ref: https://react-bootstrap.github.io/components/alerts
 * 
 * 24.09.2019   Zhenya
 ***************************************************************/
import React from "react"
import {Accordion, Alert, Card, Button} from "react-bootstrap"

import Alerts     from './Alerts'
import AlertLinks from './AlertLinks'

class AccordionOfAlerts extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Alert Styles
              </Accordion.Toggle> 
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Alerts />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Alert Link Styles
              </Accordion.Toggle> 
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <AlertLinks />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </React.Fragment>
    );
  }
};

export default AccordionOfAlerts
