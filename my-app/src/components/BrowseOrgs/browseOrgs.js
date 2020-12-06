import React, { Component }  from 'react'
import { db } from '../firebase'
import { Card } from "react-bootstrap"
import SearchBar from "./SearchBar"
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import './browseOrgs.css'

// TO-DO: search/type filter

class BrowseOrgs extends Component {
    constructor() {
        super()

        this.state = {
            orgs: [],
            searchField: ""
        }
    }

    // fetch the data from firebase
    componentDidMount() {
        db.collection('organizations')
            .get()
            .then(snapshot => {
                const orgs = []
                snapshot.forEach( doc => {
                    const id = doc.id
                    const data = doc.data()
                    data.id = id
                    orgs.push(data)
                })
                this.setState({ orgs: orgs })
                //console.log(orgs)
            })
    }

    render() {
        const orgs = this.state.orgs
        const searchField = this.state.searchField
        
        var filtered = []
        // filter the data by organization name & search bar
        orgs.forEach( org => {
            const orgName = org.name
            if(orgName.toLowerCase().includes(searchField.toLowerCase())) {
                filtered.push(org)
            }
        })
        console.log("searchField:", searchField, "filtered:", filtered)
        
        const renderCard = (card, index) => {
            return (
                <Card key={index} className="box">
                    <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Subtitle>{card.type}</Card.Subtitle>
                    <Card.Text className="details"><strong>Phone number: </strong>{card.phone}</Card.Text>
                    <Card.Text className="details"><strong>Email: </strong>{card.email}</Card.Text>
                    <Card.Text className="address"><strong>Address: </strong>{card.address}</Card.Text>
                    <Card.Text className="devices"><strong>Devices needed: </strong>{card.needs} </Card.Text>
                    <Card.Text className="description">{card.description}</Card.Text>
                    <a class="btn btn-primary" href="#" role="button">
                        <Link to={{pathname: ROUTES.DONATION, state: {org: card}}} id="donate">Donate</Link>
                    </a>
                    </Card.Body>
                </Card>
            )
        }

        return (
        <div>
            <div>
                <SearchBar 
                handleChange={(e) => this.setState({searchField: e.target.value})}
                />
            </div>
            <div className="grid">{filtered.map(renderCard)}</div>
        </div>
        
        )
    }


}

export default BrowseOrgs