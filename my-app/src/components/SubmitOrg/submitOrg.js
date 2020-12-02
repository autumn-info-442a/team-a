import React, { Component, useState } from 'react'
import './submitOrg.css'
import { db } from '../firebase'

const Organization = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [address, setAddress] = useState("")
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

    const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('organizations').add({
        name: name,
        type: type,
        address: address,
        phone: phone,
        email: email,
        needs: deviceNeeds,
        //needPhone: needsPhone,
        //needLaptop: needLaptop,
        //needTablet: needTablet,
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
    setPhone('')
    setEmail('')
    setNeedPhone(false)
    setNeedLaptop(false)
    setNeedTablet(false)
    setGoal(0)
    setDescription('')
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">What is the organization's phone number?</div>
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
                        <div className ="label-text">What is the organization's email?</div>
                        <input 
                            type = "text"
                            id = "email"
                            placeholder="example@org.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Donation goal:</div>
                        <input 
                            type = "number"
                            id = "goal"
                            placeholder="100"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        />
                    </label>
                </div>

                <div className = "form-row">
                    <label>
                        <div className ="label-text">Please provide a short description of the organization (100 words):</div>
                        <textarea rows="6" cols="80"
                            id = "description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
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