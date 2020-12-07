import React, { useState } from 'react'
import { db } from '../firebase'
import './donationConfirm.css'
import * as ROUTES from '../../constants/routes'
import { Redirect } from 'react-router-dom'

const DonationConfirm = (props) => {
    var org = {}
    var orgID = ""
    var orgReceived = 0

    if(props.location.state.org) {
        // pass in organization data
        org = props.location.state.org
        orgID = org.id
        orgReceived = org.received + 1
        console.log(orgReceived)
        //console.log(org)
    }

    var donation = {}

    if(props.location.state.donation) {
        // pass in donation data
        donation = props.location.state.donation
        //console.log(donation)
    }

    const [redirect, setRedirect] = useState(false)

    const cancelDonation = (e) => {
        e.preventDefault()

        // update received value for the organization by -1
        db.collection('organizations').doc(orgID).update({ received: orgReceived - 1})
        .then(() => {
            alert('Donation cancelled')
        })
        .catch((error) => {
            alert(error.message)
        })
        setRedirect(true)
    }

    const backToBrowse = (e) => {
        e.preventDefault()
        setRedirect(true)
    }

    if (redirect) {
        // redirect to browse page
        return <Redirect to={{ pathname: ROUTES.BROWSE_ORGS }}/>
    }

    return (
    <div>
        <h1 className="thank-donator">Thank you for donating your {donation.model}</h1>
        <h4 className="ship-label"><strong>Please ship your donation to:</strong></h4>
        <p className="org-details">
            {org.name}<br/>
            {org.address}
        </p>
        <p className="instructions">
            If you need assistance on how to prepare and ship your package, 
            please look at instructions from <a href="https://www.fedex.com/en-us/shipping/how-to-ship.html">Fedex</a> or <a href="https://www.usps.com/ship/packages.htm">UPS</a>.
        </p>
        <div id="confirm-buttons">
            <button className="cancel-button" onClick={cancelDonation}>Cancel Donation</button>
            <button className="browse-button" onClick={backToBrowse}>Back to Browse</button>
        </div>
    </div>
    
    )
}

export default DonationConfirm