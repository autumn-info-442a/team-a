import React, { Component }  from 'react'
import { db } from '../firebase'
import { Container, Row, Col } from 'reactstrap'
import OrgCard from './orgCard'

class BrowseOrgs extends Component {
    constructor() {
        super()

        this.state = {
            orgs: []
        }
    }

    componentDidMount(){
        db.collection('organizations')
            .get()
            .then( snapshot => {
                const orgs = []
                snapshot.forEach( doc => {
                    const data = doc.data()
                    orgs.push(data)
                })
                this.setState({ orgs: orgs })
                
                /*
                 var keys = Object.keys(orgs)
                 console.log(keys)

                 keys.forEach( key => {
                    var org = orgs[key]
                    console.log(org.name)
                }) */
            })
    }

    removeOrg(id) {
        this.setState({ orgs: this.state.orgs.filter(org => org.id !== id)});
      }

    render() {
        let orgCards = this.state.orgs.map(org => {
            return (
                <Col sm='4'>
                    <OrgCard org={org} />
                </Col>
            )
        })
        return(
            <Container fluid>
                <Row>
                    {orgCards}
                </Row>
            </Container>
        )
    }
}

export default BrowseOrgs