import React from "react";
import { Navbar, Form, Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <Row>
            <Navbar expand="lg" variant="light" bg="light" fixed="top">
                <Col xs>
                    <Navbar.Brand>Oportunidades em destaque</Navbar.Brand>
                </Col>
                <Col md={2}>
                    <Form.Switch
                        type="switch"
                        id="custom-switch"
                        label="Geolocalização Ativa"
                        style={{color: "green"}}
                    />
                </Col>
            </Navbar>
        </Row>
    );
}

export default Header;