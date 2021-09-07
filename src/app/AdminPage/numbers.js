import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, doubled, reset } from '../actions';

// function increamentClick() {
//     this.setState(prevState => {
//         return {
//             count: prevState.count + 1
//         }
//     })
// }
// function doubleClick() {
//     this.setState(prevState => {
//         return {
//             count: prevState.count + prevState.count
//         }
//     })
// }
// function decreamentClick() {
//     this.setState(prevState => {
//         return {
//             count: prevState.count - 1
//         }
//     })
// }
// function resetClick() {
//     this.setState(prevState => {
//         return {
//             count: 0
//         }
//     })
// }
function Numbers() {
    // constructor() {
    // super()
    // this.state = {
    //     count: 0
    // }
    // this.increamentClick = this.increamentClick.bind(this);
    // this.doubleClick = this.doubleClick.bind(this);
    // this.decreamentClick = this.decreamentClick.bind(this);
    // this.resetClick = this.resetClick.bind(this);

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    //store.subscribe(() => console.log(store.getState()))
    // }


    // return() {
    return (
        <div className="ms-3 mt-4">
            {/* <h1>{this.state.count}</h1>
            <Button onClick={this.increamentClick} variant="outline-primary">Increment</Button>{' '}
            <Button onClick={this.decreamentClick} variant="outline-secondary">Decreament</Button>{' '}
            <Button onClick={this.doubleClick} variant="outline-success">Double</Button>{' '}
            <Button onClick={this.resetClick} variant="outline-warning">Reset</Button>{' '} */}
            <h3>Counter using Redux : {counter}</h3>
            <Button onClick={() => dispatch(increment())} variant="outline-primary">Increment</Button>{' '}
            <Button onClick={() => dispatch(decrement())} variant="outline-secondary">Decreament</Button>{' '}
            <Button onClick={() => dispatch(doubled())} variant="outline-success">Double</Button>{' '}
            <Button onClick={() => dispatch(reset())} variant="outline-warning">Reset</Button>{' '}
            <hr />
        </div>
    )
    // }
}




export default Numbers;