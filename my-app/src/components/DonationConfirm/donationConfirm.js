import React from 'react'

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
        <h1>Thank you for donating your {donation.model}</h1>
        <h4>Please ship your donation to:</h4>
        <p>{org.address}</p>
        <p>
            If you need assistance on how to prepare and ship your package, 
            please look at instructions from <a>Fedex</a> or <a>UPS</a>
        </p>
    </div>
    
    )
}

export default DonationConfirm