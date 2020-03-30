import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputMode: "password"
        }
    }
    render() {
        let { inputMode } = this.state
        return (
            <div className="login">
                <Row className="login-container">
                    <Col xs={12} lg={6} md={6} className="left-pad">
                        <Form className="login-form">
                            <div className="login-form-title-text">Welcome back</div>
                            <Form.Group controlId="formBasicEmail" className="credential-container">
                                <Form.Control type="email" placeholder="" className="email-input" />
                                <div className="credential-label">Email</div>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="credential-container">
                                <Form.Control type={inputMode} placeholder="" className="password-input" />
                                <img src={require('../asset/show-password.png')} alt="" className="show-password" />
                                <div className="credential-label">Password</div>
                            </Form.Group>
                            <div className="forgot-password-label"><span className="try-again-label">{"Try again or "}</span>Reset password</div>
                            <Button variant="primary" type="submit" className="goto-button">
                                Login
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6} md={6} className="right-pad"></Col>
                </Row>
            </div>
        )
    }
}
export default Login