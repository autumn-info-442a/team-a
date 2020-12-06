import React from 'react'
import { db } from '../firebase'
import './donationConfirm.css'

// TO-DO: cancel button --> org.received -1

const DonationConfirm = (props) => {
    var org = {}

    if(props.location.state.org) {
        org = props.location.state.org
        console.log(org)
    }

    var donation = {}

    if(props.location.state.donation) {
        donation = props.location.state.donation
        console.log(donation)
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
    </div>
    
    )
}

export default DonationConfirm