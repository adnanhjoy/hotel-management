import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import single from '../../assets/single.webp';
import double from '../../assets/double.jpg';
import couple from '../../assets/couple.jpg';
import './OurPackage.css';
import { Link } from 'react-router-dom';
import { FaBed, FaDollarSign } from "react-icons/fa";

const OurPackages = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-primary pb-5'>Our Packages</h1>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" className='package-img' src={single} />
                            <Card.Body>
                                <Card.Title>Single Room</Card.Title>
                            </Card.Body>
                            <Card.Body className='d-flex justify-content-between'>
                                <span className='d-flex align-items-center'><FaBed /><p className='m-0 ms-3'>1</p></span>
                                <span className='d-flex align-items-center'><FaDollarSign /><p className='m-0 ms-3'>150</p></span>
                                <Link to='/single-room'><button className='btn btn-primary'>Book</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" className='package-img' src={double} />
                            <Card.Body>
                                <Card.Title>Double Room</Card.Title>
                            </Card.Body>
                            <Card.Body className='d-flex justify-content-between'>
                                <span className='d-flex align-items-center'><FaBed /><p className='m-0 ms-3'>2</p></span>
                                <span className='d-flex align-items-center'><FaDollarSign /><p className='m-0 ms-3'>200</p></span>
                                <Link to='/double-room'><button className='btn btn-primary'>Book</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" className='package-img' src={couple} />
                            <Card.Body>
                                <Card.Title>Couple Room</Card.Title>
                            </Card.Body>
                            <Card.Body className='d-flex justify-content-between'>
                                <span className='d-flex align-items-center'><FaBed /><p className='m-0 ms-3'>1</p></span>
                                <span className='d-flex align-items-center'><FaDollarSign /><p className='m-0 ms-3'>250</p></span>
                                <Link to='/couple-room'><button className='btn btn-primary'>Book</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default OurPackages;