import React from 'react';
import Cards from './../views/card';
import CardData from './../sampleJson/cardList';
import { Modal, Row, Col } from 'react-bootstrap';


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            setIsOpen: false
        };
        this.showModal = this.showModal.bind(this);
        this.getData = this.getData.bind(this);
        this.onHide = this.onHide.bind(this);

    }
    showModal() {
        console.log('modal');
        this.setState(prevState => {
            return {
                ...prevState,
                setIsOpen: true
            }
        })
    };

    getData(obj) {
        console.log('data', obj);
    }
    onHide() {
        console.log('onHide');
        this.setState(prevState => {
            return {
                ...prevState,
                setIsOpen: false
            }
        })
    }
    render() {
        const receivedArray = CardData.map(obj =>
            <Col className="mr-1 mb-1" key={obj.id} onClick={() => { this.showModal(); this.getData(obj) }} >
                <Cards imgUrl={obj.imgUrl} cardTitle={obj.cardTitle} cardDescription={obj.cardDescription} />
            </Col>)
        return (
            <>
                <div className="m-4">
                    <Row xs={1} sm={2} md={4} xl={4}  >
                        {receivedArray}
                    </Row>
                </div>
                <Modal
                    show={this.state.setIsOpen}
                    >
                    <Modal.Header>
                        <Modal.Title>title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> {this.state.modalObj}</Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.onHide}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Home;