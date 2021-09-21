import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class About extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        // GET the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     //    Controlling exactly when your component will re-render.
    // }

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentDidCatch(error, info) {
        // sendErrorLog(error, info);
        //componentDidCatch only works for errors in the render/lifecycle methods. If your app throws an error in a click handler, it will not be caught.
    }
    render() {
        return (
            <div className="mt-4">
                <Row xs={4} sm={4} md={4} xl={4}>
                    <Col></Col>
                    <Col className="mr-1 mb-1" >
                        <Card bg="info" text="white">
                            <Card.Header>About</Card.Header>
                            <Card.Body>
                                <Card.Title>Swati Meshram</Card.Title>
                                <Card.Text>Software Developer</Card.Text>
                                <Card.Text><a href="https://twitter.com/Swati__Meshram" target="_blank" ><img className="m-1" width="12%" src={'/twiiter.png'} />
                                </a> <a href="https://linkedin.com/in/swati-meshram" target="_blank" ><img className="m-2" width="15%" src={'/linkedin.png'} />
                                    </a></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }

}
export default About;