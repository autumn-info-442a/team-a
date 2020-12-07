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
    const [fnameError, setFnameError] = useState("")
    const [lnameError, setLnameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [deviceError, setDeviceError] = useState("")
    const [modelError, setModelError] = useState("")
    const [conditionError, setConditionError] = useState("")

    const validate = () => {
        var validFname = (fname !== "")
        if (!validFname) {setFnameError("First name cannot be blank")
        } else {setFnameError("")}

        var validLname = (lname !== "")
        if (!validLname) {setLnameError("Last name cannot be blank")
        } else {setLnameError("")}

        const phoneRegExp = /^[1-9][0-9]{2}[ \\-][0-9]{3}[ \\-][0-9]{4}$/

        var validPhone = (phone !== "" && phoneRegExp.test(phone))
        if (!validPhone) {setPhoneError("Invalid phone (must be in format: 888-888-8888)")
        } else {setPhoneError("")}

        var validAddress = (address !== "")
        if (!validAddress) {setAddressError("Address cannot be blank")
        } else {setAddressError("")}

        var validDevice = (device !== "" && org.needs.includes(device))
        if (!validDevice) {setDeviceError("Please select a needed device type")
        } else {setDeviceError("")}

        var validModel = (model !== "")
        if (!validModel) {setModelError("Device model cannot be blank")
        } else {setModelError("")}

        var validCondition = (isReset && isWorking && isSanitized)
        if (!validCondition) {setConditionError("Please confirm your device is in proper condition")
        } else {setConditionError("")}

        var valid = (validFname && validLname && validPhone && validAddress
            && validDevice && validModel && validCondition)

        return valid
    }

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

        var isValid = validate()
        if(isValid) {
            // add donation to database
            db.collection('donations').add(
                donationInfo
            )
            // update received value for the organization by +1
            db.collection('organizations').doc(orgID).update({ received: orgReceived + 1})
            setRedirect(true)
        } else {
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
            <h1> Donating to: {org.name} </h1>
            <p> <em>needs: {org.needs}</em> </p>

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
                        <div style={{ fontSize: 12, color: "red" }}>
                            {fnameError}
                        </div>
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
                        <div style={{ fontSize: 12, color: "red" }}>
                            {lnameError}
                        </div>
                    </label>                   
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Phone number:</div>
                        <input 
                            type = "text"
                            id = "phone"
                            placeholder="888-888-8888"
                            maxLength="12"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {phoneError}
                        </div>
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
                        <div style={{ fontSize: 12, color: "red" }}>
                            {addressError}
                        </div>
                    </label>
                </div>

                <div className = "device-type-model">
                    <div className = "form-row">
                        <label>
                            <div className ="label-text">Device type:</div>
                            <select id="myList" value={device} onChange={(e) => setDevice(e.target.value)}>
                                <option value="">Select device type</option>
                                <option value="phone">Phone</option>
                                <option value="laptop">Laptop</option>
                                <option value="tablet">Tablet</option>
                            </select>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {deviceError}
                            </div>
                        </label>
                    </div>

                    <div className = "form-row">
                        <label>
                            <div className ="label-text">Device model:</div>
                            <input 
                                type = "text"
                                id = "model"
                                placeholder="e.g. iPhone 10"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {modelError}
                            </div>
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
                        <div style={{ fontSize: 12, color: "red" }}>
                            {conditionError}
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