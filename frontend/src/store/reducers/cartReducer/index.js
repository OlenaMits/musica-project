import { ADD_CART, REMOVE_CART, CLEAR_CART } from "../../../helpers/constants";

const reducer = (state = [], action) => {
    const { payload } = action;

    switch (action.type) {
        case ADD_CART:
            const result = new Set(state);
            result.add(payload)
            return [...result];

        case REMOVE_CART:
            return state.filter(item => item !== payload);

        case CLEAR_CART:
            return [];
    
        default:
            return state;
    }
};

export default reducer;