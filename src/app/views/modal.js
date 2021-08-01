import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Modals(props) {
    console.log('yes');

    return (
        <Modal show={this.state.openModal}
            onHide={this.onCloseModal} backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.onCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.onCloseModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Modals