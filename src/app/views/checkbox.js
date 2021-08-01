import React from 'react';
import { Form } from 'react-bootstrap';

function Checkboxes(props) {
    return (
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" checked={props.item.completed}
                onChange={() => props.handleChecked(props.item.id)} label={props.item.text} />
        </Form.Group>
    )
}
export default Checkboxes