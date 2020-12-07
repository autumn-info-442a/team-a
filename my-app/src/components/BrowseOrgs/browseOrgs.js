import React, { Component }  from 'react'
import { db } from '../firebase'
import { Card, ProgressBar } from "react-bootstrap"
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
            searchField: "",
            selectOrgType: "",
            selectDeviceType: ""
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

                    if(data.received < data.goal) {
                        orgs.push(data)
                    }
                })
                this.setState({ orgs: orgs })
                //console.log(orgs)
            })
    }

    render() {
        const orgs = this.state.orgs
        const searchField = this.state.searchField
        const selectOrgType = this.state.selectOrgType
        const selectDeviceType = this.state.selectDeviceType
        
        var filtered = []
        // filter the data by org name (search bar) and org type (dropdown)
        orgs.forEach( org => {
            if(org.name.toLowerCase().includes(searchField.toLowerCase())
                && org.type.includes(selectOrgType)
                && org.needs.includes(selectDeviceType)) {
                filtered.push(org)
            }
        })
        
        const renderCard = (card, index) => {
            const progress = ((card.received / card.goal) * 100).toFixed(0)
            console.log("progress", progress)
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
                    <ProgressBar now={progress} label={`${progress}%`}/>
                    <Card.Text className="progress-text">Received <strong>{card.received}</strong> devices of <strong>{card.goal}</strong> donation goal</Card.Text>
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
                <h1 className="find-org">Find an organization to donate to</h1>
                <SearchBar handleChange={(e) => this.setState({searchField: e.target.value})}/>

                <label>
                        <select id="mySearch" value={this.state.selectOrgType} onChange={(e) => this.setState({selectOrgType: e.target.value})}>
                            <option value="">Select organization type</option>
                            <option value="Medical">Medical</option>
                            <option value="Educational">Educational</option>
                            <option value="Occupational">Occupational</option>
                            <option value="Military">Military</option>
                            <option value="">All</option>
                        </select>
                </label>
                <label>
                        <select id="mySearch" value={this.state.selectDeviceType} onChange={(e) => this.setState({selectDeviceType: e.target.value})}>
                            <option value="">Select device type</option>
                            <option value="phones">Phone</option>
                            <option value="laptops">Laptop</option>
                            <option value="tablets">Tablet</option>
                            <option value="">All</option>
                        </select>
                </label>
            </div>
            <div className="grid">{filtered.map(renderCard)}</div>
        </div>
        
        )
    }


}

export default BrowseOrgs