import React, { useState } from 'react'
import { db } from '../firebase'
import './donationConfirm.css'
import * as ROUTES from '../../constants/routes'
import { Redirect } from 'react-router-dom'

const DonationConfirm = (props) => {
    var donation = {}

    if(props.location.state.donation) {
        // pass in donation data
        donation = props.location.state.donation
    }
    
    var org = {}
    var orgID = ""
    var orgReceived = 0

    if(props.location.state.org) {
        // pass in organization data
        org = props.location.state.org
        orgID = org.id
        orgReceived = org.received + donation.total
    }

    // display devices included in donation
    const showDevice = (device) => {
        return (
        <div className="device-list">
            <ul>{device}</ul> 
        </div>
        )
    }

    const [redirect, setRedirect] = useState(false)

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
        <h1 className="thank-donator">Thank you for donating to {org.name}.</h1>
        <h4 className="summary-label"><strong>Here is your donation summary:</strong></h4>
        <div>{donation.donation.map(showDevice)}</div>
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
            <button className="browse-button" onClick={backToBrowse}>Back to Browse</button>
        </div>
    </div>
    
    )
}

export default DonationConfirm