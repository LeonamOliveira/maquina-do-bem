import React, { FunctionComponent } from 'react';
import { Card, CardColumns, Col, Button, Row } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons'

type CardProps = {
    title: string,
    type: string,
    city: string,
    variant: string,
    typeVariant: string,
    location: string,
    typeParticipation: string,
    colorIcon: string
    icon: React.ComponentType<IconBaseProps>
}

export const Oportunidade: FunctionComponent<CardProps> = ({ title, type, city, variant, typeVariant, location, typeParticipation, colorIcon, icon: Icon }: CardProps) =>
    <Col md={4}>
        <CardColumns>
            <Card style={{ position: "relative", width: "360px" }} >
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card.Title style={{ width: '12rem' }}>{type}</Card.Title>
                        </Col>
                        <Col md={6}>
                            <Icon style={{ position: "relative", left: "110px" }} size={40} color={colorIcon} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text style={{ color: "green", fontWeight: "bold" }}>
                                {city}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ position: "relative", top: "10px", paddingRight: "10px" }} >
                            <Card.Text style={{ color: "black", fontWeight: "bold" }}>
                                {variant}
                            </Card.Text>
                        </Col>
                        <Col style={{ position: "relative", right: "10px", width: "40%", top: "10px" }}>
                            <Card.Subtitle style={{ color: "gray", fontWeight: "bold" }} className="mb-2 text-muted">
                                {typeVariant}
                            </Card.Subtitle>
                        </Col>
                        <Col xs md={5}>
                            <Button variant="success" style={{ position: "relative", top: "5px", left: "15px", width: "100%" }}>{typeParticipation}</Button>{' '}
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{location}</small>
                </Card.Footer>
            </Card>
        </CardColumns>
    </Col>
