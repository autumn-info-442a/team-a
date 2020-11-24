import React, { Component }  from 'react'
import { db } from '../firebase'

class BrowseOrgs extends Component {
    state = {
        orgs: null
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
            })
    }

    render() {
        return(
            <div>
                <h1>Browse</h1>
            {
                this.state.orgs&&
                this.state.orgs.map( org => {
                    return (
                        <div>
                            <p>{org.name}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default BrowseOrgs