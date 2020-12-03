import React, { useState } from 'react'
import { db } from '../firebase'
import './donationForm.css'

 const DonationForm = (props) => {
    var org = {name: ""}

    if(props.location.state.org) {
        org = props.location.state.org
        console.log(org)
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()

        // db.collection('organizations'). -> received++
        db.collection('donations').add({
            fname: fname,
            lname: lname,
            phone: phone,
            address: address,
            device: device,
            model: model,
            isReset: isReset,
            isWorking: isWorking,
            isSanitized: isSanitized,
        })
        .then(() => {
            alert('Donation confirmed')
        })
        .catch((error) => {
            alert(error.message)
        })

        setFname('')
        setLname('')
        setPhone('')
        setAddress('')
        setDevice('')
        setModel('')
        setIsReset(false)
        setIsWorking(false)
        setIsSanitized(false)
    }

    return (
        <div className = "form-flex">
            <form className = "form" onSubmit={handleSubmit}>
            <h1>Donate Device to: {org.name}</h1>

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
                                <option value="0">Select device type</option>
                                <option value="1">Phone</option>
                                <option value="2">Laptop</option>
                                <option value="3">Tablet</option>
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