import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Dashboard/dashboard.css'
import MainNavbar from '../Components/MainNavbar';
import pfp from '../Assets/pfp.png'
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {

    const useR = useSelector(state => state.userReducer)
    console.log(useR)

    return (
        <div>
            <MainNavbar />
            <div className='maindashdiv'>
                <Container  >
                    <Row>
                        <Col lg={1} sm={1}>

                        </Col>

                        <Col className=' cardBox justify-content-center align-center ' lg={10} sm={1}>
                            <Card className='dashcard'>
                                <Card.Body>
                                    <Card.Title><h1>DASHBOARD</h1></Card.Title>
                                    <Card.Text  >
                                        <Row>
                                            <Col lg={4} sm={12}>
                                                <img className='pfpp' src={pfp} >
                                                </img>
                                            </Col>

                                            <Col className='pt-4 mt-2' lg={8} sm={12}>
                                                <Row className='pt-2 mt-1' >
                                                    <Col>
                                                        <h3>Name</h3>
                                                        <h6>{useR.user.fullName}</h6>
                                                    </Col>

                                                    <Col>
                                                        <h3>Email</h3>
                                                        <h6>{useR.user.email}</h6>
                                                    </Col>
                                                </Row>

                                                <Row className='pt-2 mt-1' >
                                                    <Col>
                                                        <h3>School</h3>
                                                        <h6>{useR.user.school}</h6>
                                                    </Col>

                                                    <Col>
                                                        <h3>Country</h3>
                                                        <h6>{useR.user.country}</h6>
                                                    </Col>
                                                </Row>

                                                <Row className='pt-2 mt-1' >
                                                    <Col>
                                                        <h3>State</h3>
                                                        <h6>{useR.user.state}</h6>
                                                    </Col>

                                                    <Col>
                                                        <h3>City</h3>
                                                        <h6>{useR.user.city}</h6>
                                                    </Col>
                                                </Row>

                                                {
                                                    useR.user.class != null ? (
                                                        <Row  >
                                                            <Col>
                                                                <h3>Class</h3>
                                                                <h6>{useR.user.class}</h6>
                                                            </Col>

                                                        </Row>
                                                    ) : (
                                                        ''
                                                    )
                                                }

                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={1} sm={1}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Dashboard