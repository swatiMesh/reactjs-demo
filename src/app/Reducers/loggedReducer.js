

// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }
const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;

    }
}
export default loggedReducer;