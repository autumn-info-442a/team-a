import React, { Component }  from 'react'
import { db } from '../firebase'
import { Card } from "react-bootstrap"
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
                    <Card.Text>{card.description}</Card.Text>
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