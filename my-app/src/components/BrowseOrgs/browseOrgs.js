import React, { Component }  from 'react'
import { db } from '../firebase'
import { Card, Button } from "react-bootstrap"
import './browseOrgs.css'
// import { Container, Row, Col } from 'reactstrap'
// import OrgCard from './orgCard'

class BrowseOrgs extends Component {
    constructor() {
        super()

        this.state = {
            orgs: []
        }
    }

    // fetch the data from firebase
    componentDidMount() {
        db.collection('organizations')
            .get()
            .then(snapshot => {
                const orgs = []
                snapshot.forEach( doc => {
                    const data = doc.data()
                    orgs.push(data)
                })
                this.setState({ orgs: orgs })
                console.log(orgs)
            })
    }

    render() {
        const orgs = this.state.orgs

        const renderCard = (card, index) => {
            return (

                <Card style={{ width: "18rem" }} key={index} className="box">
                    <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Subtitle>{card.type}</Card.Subtitle>
                    <Card.Text className="details">Phone number: {card.phone}</Card.Text>
                    <Card.Text className="details">Email: {card.email}</Card.Text>
                    <Card.Text className="details">Address: {card.address}</Card.Text>
                    <Card.Text>Devices needed: {card.needs} </Card.Text>
                    <Card.Text className="description">{card.description}</Card.Text>
                    <Button variant="primary">Donate</Button>
                    </Card.Body>
                </Card>
            )
        }

        return (
        <div className="grid">{orgs.map(renderCard)}</div>
        )
    }


}

export default BrowseOrgs