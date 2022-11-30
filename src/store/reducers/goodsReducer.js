import { SET_GOODS } from "../../helpers/constants";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            const { payload } = action;
            return [...payload];
    
        default:
            return state;
    }
};

export default reducer;