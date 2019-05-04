import ActionTypes from './actionTypes';

const inititalState = {};
const RootReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default RootReducer;
