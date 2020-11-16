import React, { Component } from 'react';

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
            Goal: '',
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
        this.handleGoalChange = this.handleGoalChange.bind(this);
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
    handleGoalChange(event) {
        this.setState({Goal: event.target.value});
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
            Goal: this.state.Goal,
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
        this.state.Goal = '';
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
                                <h1>Submit an Organization</h1>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default submitOrg;