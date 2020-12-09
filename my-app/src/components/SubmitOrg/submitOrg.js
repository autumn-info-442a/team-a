import React, { useState } from 'react'
import './submitOrg.css'
import { db } from '../firebase'

const Organization = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [needPhone, setNeedPhone] = useState(false)
    const handleClickPhone = () => setNeedPhone(!needPhone)
    const [needLaptop, setNeedLaptop] = useState(false)
    const handleClickLaptop = () => setNeedLaptop(!needLaptop)
    const [needTablet, setNeedTablet] = useState(false)
    const handleClickTablet = () => setNeedTablet(!needTablet)

    var deviceNeeds = ""
    if(needPhone && needLaptop && needTablet) {deviceNeeds = "phones, laptops, tablets"}
    else if(needPhone && needLaptop) {deviceNeeds = "phones, laptops"}
    else if(needPhone && needTablet) {deviceNeeds = "phones, tablets"}
    else if(needLaptop && needTablet) {deviceNeeds = "laptops, tablets"}
    else if (needPhone) {deviceNeeds = "phones"}
    else if(needLaptop) {deviceNeeds = "laptops"}
    else if(needTablet) {deviceNeeds = "tablets"}

    const [goal, setGoal] = useState(0)
    const [description, setDescription] = useState("")

    // form validation
    const [nameError, setNameError] = useState("")
    const [typeError, setTypeError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [cityError, setCityError] = useState("")
    const [stateError, setStateError] = useState("")
    const [zipError, setZipError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [needsError, setNeedsError] = useState("")
    const [goalError, setGoalError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")

    const validate = () => {
        var validName = (name !== "")
        if (!validName) {setNameError("Name cannot be blank")
        } else {setNameError("")}

        var validType = (type !== "")
        if (!validType) {setTypeError("Please select a type")
        } else {setTypeError("")}

        var validAddress = (address !== "")
        if (!validAddress) {setAddressError("Address cannot be blank")
        } else {setAddressError("")}

        var validCity = (city !== "")
        if (!validCity) {setCityError("City cannot be blank")
        } else {setCityError("")}

        var validState = (state !== "")
        if (!validState) {setStateError("State cannot be blank")
        } else {setStateError("")}

        var validZip = (zip !== "")
        if (!validZip) {setZipError("Zip code cannot be blank")
        } else {setZipError("")}

        const phoneRegExp = /^[1-9][0-9]{2}[ \\-][0-9]{3}[ \\-][0-9]{4}$/

        var validPhone = (phone !== "" && phoneRegExp.test(phone))
        if (!validPhone) {setPhoneError("Invalid phone (must be in format: 888-888-8888)")
        } else {setPhoneError("")}

        var validEmail = (email !== "" && email.includes("@"))
        if (!validEmail) {setEmailError("Invalid email, must include '@'")
        } else {setEmailError("")}

        var validNeed = (deviceNeeds !== "")
        if (!validNeed) {setNeedsError("Please select at least one option")
        } else {setNeedsError("")}

        var validGoal = (goal >= 1)
        if (!validGoal) {setGoalError("Goal must be greater than 0")
        } else {setGoalError("")}

        var validDescription = (description !== "")
        if (!validDescription) {setDescriptionError("Description cannot be blank")
        } else {setDescriptionError("")}       

        var valid = (validName && validType && validAddress && validPhone
            && validEmail && validNeed && validGoal && validDescription)
            
        return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        var isValid = validate()
        if(isValid) {
            // send data to database
            db.collection('organizations').add({
                name: name,
                type: type,
                address: address + "," + city + "," + state + "," + zip,
                phone: phone,
                email: email,
                needs: deviceNeeds,
                goal: parseInt(goal),
                received: 0,
                description: description,
            })
            .then(() => {
                alert('Organization has been submitted')
            })
            .catch((error) => {
                alert(error.message)
            })

            setName('')
            setType('')
            setAddress('')
            setCity('')
            setState('')
            setZip('')
            setPhone('')
            setEmail('')
            setNeedPhone(false)
            setNeedLaptop(false)
            setNeedTablet(false)
            setGoal(0)
            setDescription('')
        } else {
            alert("Please provide all required information and ensure proper formatting")
        }
    }

    return (
        <div className="form-flex">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Submit Organization Goal</h1>
                
                <div className = "org-name-type">
                    <div className = "form-row">
                        <label>
                            <div className ="label-text">What is your organization?</div>
                            <input
                                type = "text"
                                id = "name"
                                placeholder="Organization name"
                                maxLength="50"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <div style={{ fontSize: 12, color: "red" }}>
                                {nameError}
                            </div>
                        </label>
                    </div>

                    <div className = "form-row">
                        <label>
                            <div className ="label-text">Organization type:</div>
                            <select id="myList" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="">Select organization type</option>
                                <option value="Medical">Medical</option>
                                <option value="Educational">Educational</option>
                                <option value="Occupational">Occupational</option>
                                <option value="Military">Military</option>
                            </select>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {typeError}
                            </div>
                        </label>
                    </div>
                </div>
                
                <div className = "form-row">
                    <label>
                        <div className ="label-text">Where is the organization located?</div>
                        <input 
                            type = "text"
                            id = "address"
                            placeholder="Organization address"
                            maxLength="50"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {addressError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">City:</div>
                        <input 
                            type = "text"
                            id = "city"
                            placeholder="City"
                            maxLength="30"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {cityError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">State:</div>
                        <input 
                            type = "text"
                            id = "state"
                            placeholder="e.g. WA"
                            maxLength="2"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {stateError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Zip code:</div>
                        <input 
                            type = "text"
                            id = "zip"
                            placeholder="Zip code"
                            maxLength="10"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {zipError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">What is the organization's phone number?</div>
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
                        <div className ="label-text">What is the organization's email?</div>
                        <input 
                            type = "text"
                            id = "email"
                            placeholder="example@org.com"
                            maxLength="50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {emailError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">What device(s) is the organization in need of?</div>
                        <div className ="device-types">
                            <span id="type"><input onClick={handleClickPhone} checked={needPhone} type="checkbox" /> Phones</span>
                            <span id="type"><input onClick={handleClickLaptop} checked={needLaptop} type="checkbox" /> Laptops</span>
                            <span id="type"><input onClick={handleClickTablet} checked={needTablet} type="checkbox" /> Tablets</span>
                        </div>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {needsError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Donation goal:</div>
                        <input 
                            type = "number"
                            id = "goal"
                            placeholder="100"
                            maxLength="9"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {goalError}
                        </div>
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Please provide a short description of the organization (300 characters):</div>
                        <textarea rows="6" cols="80"
                            id = "description"
                            placeholder="Description"
                            maxLength="300"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {descriptionError}
                        </div>
                    </label>
                </div>

                <div id="submit-button">
                    <button type='submit'>
                        Submit 
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Organization