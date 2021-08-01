import React from 'react';

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
            <div>
                <h2>About!</h2>
            </div>
        )
    }

}
export default About;