import React, { useState } from 'react'
import { db } from '../firebase'
import * as ROUTES from '../../constants/routes'
import { Redirect } from 'react-router-dom'
import './donationForm.css'

// TO-DO: form validation

 const DonationForm = (props) => {
    var org = {name: ""}
    var orgID = ""
    var orgReceived = 0

    if(props.location.state.org) {
        // pass organization data in
        org = props.location.state.org
        orgID = org.id
        orgReceived = org.received
    }

    const [redirect, setRedirect] = useState(false)

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [device, setDevice] = useState("")
    const [model, setModel] = useState("")

    const [isReset, setIsReset] = useState(false)
    const handleClickIsReset = () => setIsReset(!isReset)

    const [isWorking, setIsWorking] = useState(false)
    const handleClickIsWorking = () => setIsWorking(!isWorking)

    const [isSanitized, setIsSanitized] = useState(false)
    const handleClickIsSanitized = () => setIsSanitized(!isSanitized)

    // form validation
    var noBlanks = (fname !== "" && lname !== "" && phone !== "" && address !== "" 
                        && device !== "" && model !== "")
    var properCondition = (isReset && isWorking && isSanitized)
    var valid = noBlanks && properCondition
    
    // this object captures all information about the donation
    var donationInfo = {
        fname: fname,
        lname: lname,
        phone: phone,
        address: address,
        device: device,
        model: model,
        isReset: isReset,
        isWorking: isWorking,
        isSanitized: isSanitized,
        organization: org.name
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(valid) {
            // add donation to database
            db.collection('donations').add(
                donationInfo
            )
            // update received value for the organization by +1
            db.collection('organizations').doc(orgID).update({ received: orgReceived + 1})
            setRedirect(true)
        } else {
            // form validation
            alert("Please provide all required information and confirm your device is in proper condition")
        }
    }

    if (redirect) {
        // redirect to confirmation page
        return <Redirect to={{ pathname: ROUTES.DONATION_CONFIRM, 
                                state: {org: org, donation: donationInfo}}}/>
    }

    return (
        <div className = "form-flex">
            <form className = "form" onSubmit={handleSubmit}>
            <h1>Donating to: {org.name}</h1>

                <div className = "names">
                    <label>
                       <div className = "label-text">First name:</div>
                       <input 
                            type = "text"
                            id = "fname"
                            placeholder="First name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </label>

                    <label>
                       <div className = "label-text">Last name:</div>
                       <input 
                            type = "text"
                            id = "lname"
                            placeholder="Last name"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </label>                   
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Phone number:</div>
                        <input 
                            type = "text"
                            id = "phone"
                            placeholder="888-888-8888"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Address:</div>
                        <input 
                            type = "text"
                            id = "address"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                </div>

                <div className = "device-type-model">
                    <div className = "form-row">
                        <label>
                            <div className ="label-text">Device type:</div>
                            <select id="myList" value={device} onChange={(e) => setDevice(e.target.value)}>
                                <option value="">Select device type</option>
                                <option value="Phone">Phone</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Tablet">Tablet</option>
                            </select>
                        </label>
                    </div>

                    <div className = "form-row">
                        <label>
                            <div className ="label-text">Device model:</div>
                            <input 
                                type = "text"
                                id = "model"
                                placeholder="Device model"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </label>
                    </div>

                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Please confirm your device meets these requirements before donating:</div>
                        <div className ="requirement-types">
                            <span id="type"><input onClick={handleClickIsReset} checked={isReset} type="checkbox" />Device is factory reset</span>
                            <span id="type"><input onClick={handleClickIsWorking} checked={isWorking} type="checkbox" />Device is in working condition</span>
                            <span id="type"><input onClick={handleClickIsSanitized} checked={isSanitized} type="checkbox" />Device is properly sanitized</span>
                        </div>
                    </label>
                </div>

                <div id="submit-button">
                    <button type='submit'>
                        Confirm Donation
                    </button>
                </div>

            </form>
        </div>
    )
}

export default DonationForm