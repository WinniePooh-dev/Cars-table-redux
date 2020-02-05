import * as actionTypes from '../actionTypes';


// DEALERS REDUCER
const initState = {
    dealers: []
};

const dealersData = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.DEALERS_LOADED:
            return {
                dealers: action.payload,
            }
        case actionTypes.UPDATE_DEALERS:
            return {
                dealers: [...state.dealers, ...action.payload]
            }
        default:
            return state;
    };
};

export default dealersData;