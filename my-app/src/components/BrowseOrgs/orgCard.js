import React, { Component } from "react"
// import { Card } from "react-bootstrap"
import './browseOrgs.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class OrgCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {name, type, description } = this.props.org
        return (
            <div>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{type}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button>Donate</Button>
              </CardBody>
            </Card>
          </div>
        )
    }
}

export default OrgCard