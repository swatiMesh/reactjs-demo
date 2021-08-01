import React from 'react';
import { Button } from 'react-bootstrap';


class Numbers extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increamentClick = this.increamentClick.bind(this);
        this.doubleClick = this.doubleClick.bind(this);
        this.decreamentClick = this.decreamentClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }
    increamentClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    doubleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + prevState.count
            }
        })
    }
    decreamentClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    resetClick() {
        this.setState(prevState => {
            return {
                count: 0
            }
        })
    }
   
    render() {
        return (
            <div  className="ms-3">
                <h1>{this.state.count}</h1>
                <Button onClick={this.increamentClick} variant="outline-primary">Increment</Button>{' '}
                <Button onClick={this.decreamentClick} variant="outline-secondary">Decreament</Button>{' '}
                <Button onClick={this.doubleClick} variant="outline-success">Double</Button>{' '}
                <Button onClick={this.resetClick} variant="outline-warning">Reset</Button>{' '}
                <hr />   
            </div>
        )
    }
}




export default Numbers;