import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './header.css'
import Home from '../AdminPage/home';
import About from '../AdminPage/about';
import Calculate from '../AdminPage/numbers';
import LoginForm from '../AdminPage/form';
import { Modal, Button, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            isUserAuthenticated: true,
            openModal: false
        };
    }
    onClickButton = e => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                openModal: true
            }
        })
    }
    onCloseModal = () => {
        this.setState({ openModal: false })
    }
    render() {
        const date = new Date();
        // const date = new Date(2021, 6, 30, 10)
        const hours = date.getHours()
        let timeOfDay;
        const styles = {
            color: "rebeccapurple"
        }
        if (hours < 12) {
            timeOfDay = "Morning";
            styles.color = "#04756F"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon";
            styles.color = "#2E0927"
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = "Evening";
            styles.color = "#0088ff"
        } else {
            timeOfDay = "Night";
            styles.color = "#D90000"
        }

        return (
            <>
                <Row className="fixed-header App-header self-align-center">
                    <Col md={1} xs={1} sm={1} xl={1} className="text-center">
                        <img role="button" onClick={this.onClickButton} alt="user" src={'/menu_icon.svg'} />
                    </Col>
                    <Col className="self-align-center">
                        <h5 style={styles} className="text-start">Hey Good {timeOfDay} Welcome to ReactJs</h5>

                    </Col>
                </Row>
                <div className="pt-5">
                    <Router>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        this.state.isUserAuthenticated ?
                                            <Redirect to="/home" /> :
                                            <Redirect to="/login" />
                                    )
                                }}
                            />
                            <Route exact path='/home' component={Home}></Route>
                            <Route exact path='/about' component={About}></Route>
                            <Route exact path='/numbers' component={Calculate}></Route>
                            <Route exact path='/form' component={LoginForm}></Route>
                        </Switch>
                        <Modal size="sm" show={this.state.openModal}
                            onHide={this.onCloseModal} backdrop="static"
                            keyboard={false}>
                            <Modal.Header>
                                <Modal.Title>Swati Meshram</Modal.Title>
                                <Button variant="secondary" onClick={this.onCloseModal}>
                                    Close
                                </Button>
                            </Modal.Header>
                            <Modal.Body className="fontLarge">
                                <NavLink activeClassName="activeLink" to="/home" onClick={this.onCloseModal}>
                                    <Row className="sidebar">
                                        <Col>
                                            Home
                                        </Col>
                                    </Row>
                                </NavLink>
                                <NavLink activeClassName="activeLink" to="/about" onClick={this.onCloseModal}>
                                    <Row className="sidebar">
                                        <Col>
                                            About Us
                                        </Col>
                                    </Row>
                                </NavLink>
                                <NavLink activeClassName="activeLink" to="/numbers" onClick={this.onCloseModal}>
                                    <Row className="sidebar">
                                        <Col>
                                            Calculate
                                        </Col>
                                    </Row>
                                </NavLink>
                                <NavLink activeClassName="activeLink" to="/form" onClick={this.onCloseModal}>
                                    <Row className="sidebar">
                                        <Col>
                                            Form
                                        </Col>
                                    </Row>
                                </NavLink>
                            </Modal.Body>
                        </Modal>
                    </Router>
                </div>
            </>
        )
    }
}

export default Header