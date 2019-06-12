const initialState = {
    count: 0,
    currentUser: {
        firstName: 'meow',
        lastName: 'lah'
    }
};


const Testreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

export default Testreducer;