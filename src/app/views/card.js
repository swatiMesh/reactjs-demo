import React from 'react';
import { Card } from 'react-bootstrap';

function Cards(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                    {props.cardDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards