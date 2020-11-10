import React, { Component } from 'react'

import LandingImage from './landingimage.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LandingPageView extends Component {
    render() {
        return (
            <div className="landing-page">
                <Container>
                    <Row>
                        <Col className="landing-left">
                            <div className="landing-text">
                                <h1>We help you close the digital divide for accessible technology</h1>
                                <p>Let us help you find an organization to donate your devices to or 
                                    let us help your organization meet your device donation goals</p>
                                <a className="browse-organizations-button" href="/">
                                    Browse organizations
                                </a>
                                <a className="submit-a-goal-button" href="/">
                                    Submit a goal
                                </a>
                            </div>
                        </Col>

                        <Col className="landing-right">
                            <img src={LandingImage} className="landing-img" alt="People on devices"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LandingPageView;