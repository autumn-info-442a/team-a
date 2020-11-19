import React, { Component } from 'react';
import './submitOrg.css'

class submitOrg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Type: '',
            Address: '',
            Phone: '',
            Email: '',
            Need: '',
            Description: '',
            Mission: '',
            info: []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNeedChange = this.handleNeedChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMissionChange = this.handleMissionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({Name: event.target.value});
    }
    handleTypeChange(event) {
        this.setState({Type: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({Address: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({Phone: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({Email: event.target.value});
    }
    handleNeedChange(event) {
        this.setState({Need: event.target.value});
    }
    handleDescriptionChange(event) {
        this.setState({Description: event.target.value});
    }

    handleMissionChange(event) {
        this.setState({Mission: event.target.value});
    }

    handleSubmit(event) {
        var obj = {Name: this.state.Name,
            Type: this.state.Type,
            Address: this.state.Address,
            Phone: this.state.Phone,
            Email: this.state.Email,
            Need: this.state.Need,
            Description: this.state.Description,
            Mission: this.state.Mission
        }
        
        this.state.info.push(obj);
        event.preventDefault();

        this.clearState(event);
        this.setState({});
    }

    clearState(event) {
        this.state.Name = '';
        this.state.Type = '';
        this.state.Address = '';
        this.state.Phone = '';
        this.state.Email = '';
        this.state.Need = '';
        this.state.Description = '';
        this.state.Mission = '';
    }

    render() {
        return (
            <div>
                <main id = "submit org">
                    <div className="form-flex">
                        <div id = "submit org form">
                            <form>
                                <h1>Submit a goal for your organization</h1>
                                <div className="form-content">

                                    <div className="organization-type">
                                        <div className="form-row">
                                            <label>
                                                <div className ="label-text">What is your organization?</div>
                                                <input type="text" id="name" placeholder="Organization name" value={this.state.Name} onChange={this.handleNameChange} />
                                            </label>
                                        </div>

                                        <div className="form-row">
                                            <label className="num">
                                                <div className="label-text">Organization type:</div>
                                                <select id="myList" value={this.state.Type} onChange={this.handleTypeChange}>
                                                <option value="0">Select organization type</option>
                                                <option value="1">Medical</option>
                                                <option value="2">Educational</option>
                                                <option value="3">Occupational</option>
                                                <option value="4">Military</option>
                                                </select>
                                            </label>
                                        </div>
                                        
                                    </div>

                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">Where is your organization located?</div>
                                            <input type="text" id="address" placeholder="Address" value={this.state.Address} onChange={this.handleAddressChange} />
                                        </label>
                                    </div>
                                    
                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">What is your organization's phone number?</div>
                                            <input type="text" id="phone" placeholder="888-888-8888" value={this.state.Phone} onChange={this.handlePhoneChange} />
                                        </label>
                                    </div>

                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">Where is your organization's email?</div>
                                            <input type="text" id="email" placeholder="example@org.com" value={this.state.Email} onChange={this.handleEmailChange} />
                                        </label>
                                    </div>

                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">What device(s) is the organization in need of?</div>
                                            <div className ="device-types" onChange={this.handleNeedChange}>
                                                <span id="type"><input type="checkbox" value="Phones" name="need" /> Phones</span>
                                                <span id="type"><input type="checkbox" value="Laptops" name="need" /> Laptops</span>
                                                <span id="type"><input type="checkbox" value="Tablets" name="need" /> Tablets</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">Please give a short description of your organization (50 words max)</div>
                                            <textarea rows="3" cols="80" id="description" placeholder="Description" value={this.state.Description} onChange={this.handleDescriptionChange} />
                                        </label>
                                    </div>
{/* 
                                    <div className="form-row">
                                        <label>
                                            <div className ="label-text">Organization mission statement:</div>
                                            <input type="text" id="mission" placeholder="Mission statement" value={this.state.Mission} onChange={this.handleMissionChange} />
                                        </label>
                                    </div>
*/}                                 
                                    <div id="submit-button">
                                        <button id="submitButton" className="button" onClick={this.handleSubmit} aria-live="assertive" role="submitButton">Submit organization goal</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </main>
            </div>
        )
    }
}

export default submitOrg;