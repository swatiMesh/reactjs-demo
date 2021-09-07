import React from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import Checkboxes from './../views/checkbox';
import CheckboxData from "./../sampleJson/checkboxList"

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            todos: CheckboxData
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswrdChange = this.handlePasswrdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }
    handleEmailChange(event) {
        // this.setState(prevState => {
        //     return {
        //         email: event.target.value
        //     }
        // })
        this.setState({ email: event.target.value });
    }
    handlePasswrdChange(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        alert('Form was submitted-> Email: ' + this.state.email);
        event.preventDefault();
    }
    handleChecked(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
        const todoItems = this.state.todos.map(item => <Checkboxes key={item.id} item={item} handleChecked={this.handleChecked} />)
        return (
            <div className="ms-3 mt-3">
                <Row>
                    <Col></Col><Col>
                        <h2 className="text-center">Form!</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control value={this.state.email} onChange={this.handleEmailChange} type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={this.state.password} onChange={this.handlePasswrdChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" checked={this.state.checked}
                                    onChange={this.handleChecked} label="Check me out" />
                            </Form.Group> */}
                                    {todoItems}
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col><Col>
                                    <Button variant="primary" type="submit" value="Submit">
                                        Submit
                                    </Button>
                                </Col><Col></Col>
                            </Row>
                        </Form>
                    </Col><Col></Col>
                </Row>
            </div>
        )
    }

}
export default LoginForm;